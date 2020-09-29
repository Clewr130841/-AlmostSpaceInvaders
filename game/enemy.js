var ENEMY_SIZE_W = 30;
var ENEMY_SIZE_H = 10;
var ENEMY_COLOR = "red";

function Enemy(speed)
{
    this.speed = speed;
    var enemyRect = new Rectangle(ENEMY_SIZE_W, ENEMY_SIZE_H, ENEMY_COLOR);
    this.__proto__ = new GameObject(enemyRect);
    this.isEnemy = true;


    this.beforeFrame = function(ellapsed, now)
    {
        var movement = this.speed * ellapsed;
        if((this.position.X + this.rect.width + movement) >= this.game.container.clientWidth)
        {
            this.game.removeGameObject(this);
        }
        else
        {
            this.position.add(new Vector(movement, 0))
        }
    }
}