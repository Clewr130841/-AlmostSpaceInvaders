function Input()
{
    this.left = false;
    this.right = false;
    this.shoot = false;

    var input = this;

    document.addEventListener("keydown", function(event){
        switch(event.code)
        {
            case "Space":
                input.shoot = true;
                break;
            case "KeyA":
                input.left = true;
                break;
            case "KeyD":
                input.right = true;
                break;
            case "ArrowRight":
                input.right = true;
                break;
            case "ArrowLeft":
                input.left = true;
                break;
        }
    });

    document.addEventListener("keyup", function(event){
        switch(event.code)
        {
            case "Space":
                input.shoot = false;
                break;
            case "KeyA":
                input.left = false;
                break;
            case "KeyD":
                input.right = false;
                break;
            case "ArrowRight":
                input.right = false;
                break;
            case "ArrowLeft":
                input.left = false;
                break;
        }
    });
}