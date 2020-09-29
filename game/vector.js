function Vector(x, y)
{
    this.X = x;
    this.Y = y;
    this.add = function(addVector){
        this.X += addVector.X;
        this.Y += addVector.Y;
    }

    this.set = function(newVector){
        this.X = newVector.X;
        this.Y = newVector.Y;
    }
}