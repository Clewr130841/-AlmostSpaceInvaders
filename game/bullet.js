var BULLET_SIZE = 5;
var BULLET_COLOR = "black";

function Bullet(speed)
{
    var bulletRect = new Rectangle(BULLET_SIZE, BULLET_SIZE, BULLET_COLOR);
    this.__proto__ = new GameObject(bulletRect);

    this.beforeFrame = function(ellapsed, now)
    {
        var movement = Math.floor(speed * ellapsed);
        if((this.position.Y + this.rect.height + movement) >= this.game.container.clientHeight)
        {
            this.game.removeGameObject(this);
        }
        else
        {
            this.position.add(new Vector(0, movement))
            var currentPos = this.getClientPosition();

            var gameObjects = this.game.getGameObjectByPosition(currentPos);

            var enemies = gameObjects.filter(function(go){
                return go.isEnemy;
            });

            if(enemies.length > 0)
            {
                this.game.removeGameObject(this);
                this.game.removeGameObject(enemies[0]);
            }
        }
    }
}