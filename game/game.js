var MAX_FPS = 200;
var FRAME_DELAY = 1000 / MAX_FPS;

function Game(container) {
    var gameObjects = [];
    var game = this;
    this.container = container;

    this.input = new Input();

    var addList = [];
    var removeList = [];

    this.addGameObject = function (gameObject) {
        if (!gameObject.added) {
            gameObject.added = true;
            addList.push(gameObject);
        }
    }

    this.getGameObjectByPosition = function (vector) {
        var htmlElements = document.elementsFromPoint(vector.X, vector.Y);
        htmlElements = htmlElements.filter(function (elem) {
            return elem.dataset.id;
        });
        return htmlElements.map(function(elem){
            return game.getGameObjectById(elem.dataset.id);
        });
    }

    this.getGameObjectById = function (id) {
        return gameObjects.find(function (go) {
            return go.id == id;
        });
    }

    this.removeGameObject = function (gameObject) {
        if (!gameObject.deleted) {
            gameObject.deleted = true;
            removeList.push(gameObject);
        }
    }

    var lastFrame;

    this.frame = function () {
        var now = new Date();

        addList.forEach(function (gameObject) {
            gameObjects.push(gameObject);
            gameObject.onAdd(game);
        });

        removeList.forEach(function (gameObject) {

            var index = gameObjects.findIndex(function (go) {
                return go == gameObject;
            });
            gameObjects.splice(index, 1);
            gameObject.onRemove()
        })

        addList = [];
        removeList = [];

        var ellapsed = (now - lastFrame) / 1000;
        lastFrame = now;
        gameObjects.forEach(function (go) {
            if(!go.deleted)
            {
                go.onFrame(ellapsed, now)
            }
        });

    }

    var gameTimer = null;

    this.stop = function () {
        if (gameTimer) {
            clearInterval(gameTimer);
        }  
        gameObjects = [];
        container.innerHTML = "";
    }

    this.start = function () {
        this.stop();

        var player = new Player();
        player.position.set(new Vector(50, 10));
        this.addGameObject(player);
        this.addGameObject(new EnemyGenerator())

        lastFrame = new Date();
        var game = this;
        gameTimer = setInterval(
            function () {
                try {
                    game.frame();
                }
                catch (ex) {
                    console.log(ex);
                }
            },
            FRAME_DELAY
        );
    }
}

