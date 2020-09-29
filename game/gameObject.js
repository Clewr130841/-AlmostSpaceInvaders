const GAME_OBJECT_PREFIX = "gameObject-";
function GameObject(rect)
{
    this.id = GameObject.idCounter++;
    this.position = new Vector(0,0);
    this.rect = rect;
    
    this.game = null;
    this.htmlElement = null;

    this.draw = function(){
        this.htmlElement.style.position = 'absolute';
        this.htmlElement.style.left = this.position.X + "px";
        this.htmlElement.style.bottom = this.position.Y + "px";
        this.htmlElement.style.width = this.rect.width + "px";
        this.htmlElement.style.height = this.rect.height + "px";
        this.htmlElement.style.backgroundColor = this.rect.color;
    }

    this.getClientPosition = function(){
        var domRect = this.htmlElement.getBoundingClientRect();

        return new Vector(domRect.x + (domRect.width / 2), domRect.y + (domRect.height / 2));
    }

    this.onRemove = function()
    {
        this.htmlElement.remove();
    }

    this.onAdd = function(game)
    {
        this.game = game;
        this.htmlElement = document.createElement('div');
        this.htmlElement.dataset.id = this.id;
        game.container.append(this.htmlElement);
        this.onCreate();
    }

    this.beforeFrame = function(ellapsed, now)
    {
    }

    this.onCreate = function()
    {

    }

    this.onFrame = function(ellapsed, now)
    {
        this.beforeFrame(ellapsed, now);
        this.draw();
    }
}

GameObject.idCounter = 0;