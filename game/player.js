function Player(name)
{
    this.shootTimeout = 300;
    this.isPlayer = true;
    //Все скорости в пикселях в сек
    this.speed = 500;
    this.bulletSpeed = 1000;

    var playerRect = new Rectangle(30, 10, "green");
    this.__proto__ = new GameObject(playerRect);

    var nextShoot = new Date();

    this.shoot = function(now)
    {
        if(now > nextShoot)
        {
            var bullet = new Bullet(this.bulletSpeed);
            bullet.position.add(new Vector(this.position.X + (this.rect.width / 2) - (bullet.rect.width / 2), this.position.Y + this.rect.height));
            this.game.addGameObject(bullet);
            nextShoot = now.add(this.shootTimeout);
        }
    }

    this.beforeFrame = function(ellapsed, now)
    {
        if(this.game.input.left)
        {
            if(this.position.X > 0)
            {
                this.position.add(new Vector(-(this.speed * ellapsed), 0));
            }
            else
            {
                this.position.set(new Vector(0, this.position.Y))
            }
        }
        
        if(this.game.input.right)
        {
            if((this.position.X + this.rect.width + (this.speed * ellapsed)) >= this.game.container.clientWidth)
            {
                this.position.set(new Vector(this.game.container.clientWidth - this.rect.width, this.position.Y))
            }
            else
            {
                this.position.add(new Vector(this.speed * ellapsed, 0));
            }
        }

        if(this.game.input.shoot)
        {
            this.shoot(now);
        }
    }
}