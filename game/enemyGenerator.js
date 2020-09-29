const ENEMY_ROWS = 10;
const ROW_HEIGHT = 30;
//row - ряд в котором пойдет враг
function EnemyGenerator()
{
    this.speed = 500;
    this.__proto__ = new GameObject(new Rectangle(0, 0, ""));

    var minTimeout = 500;
    var maxTimeout = 2000;

    var minSpeed = 100;
    var maxSpeed = 300;

    var nextGeneration = new Date().add(maxTimeout);

    this.beforeFrame = function(ellapsed, now)
    {
        if(nextGeneration < now)
        {
            var enemy = new Enemy(Math.randomBetween(minSpeed, maxSpeed));
            var y = this.game.container.clientHeight - (Math.randomBetween(1, ENEMY_ROWS) * ROW_HEIGHT);
            enemy.position.set(new Vector(0, y));
            this.game.addGameObject(enemy);
            var timeout = Math.randomBetween(minTimeout, maxTimeout);
            nextGeneration = now.add(timeout);
        }
    }
}