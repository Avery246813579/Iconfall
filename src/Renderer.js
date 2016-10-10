if (typeof window.iconfall == "undefined") {
    window.iconfall = {};
}

function Renderer() {
    this.animationID = undefined;
    this.lastTime = new Date().getTime();
    this.waitTime = 1000;
    this.firstSpawn = false;

    function draw() {
        clearCanvas();
        checkLoad();

        for (var i = 0; i < self.parent.getIcons().length; i++) {
            var icon = self.parent.getIcons()[i];

            var iLocation = icon.getLocation();
            self.parent.ctx.drawImage(icon.image, icon.getLocation().getX(), icon.getLocation().getY(), 50, 50);

            if (iLocation.getX() > self.parent.canvas.width + 40) {
                iLocation.setX(-40);
            }

            if (iLocation.getY() > self.parent.canvas.height + 40) {
                iLocation.setY(-40);
            }

            icon.tick();
        }

        self.animationID = requestAnimationFrame(draw);
    }

    function clearCanvas() {
        self.parent.ctx.clearRect(0, 0, self.parent.canvas.width, self.parent.canvas.height);
        self.parent.ctx.beginPath();
    }

    function checkLoad() {
        var now = new Date().getTime();
        var difference = now - self.lastTime;

        if(self.firstSpawn === true){
            self.firstSpawn = false;

            spawnIcon(true);
        }

        if (difference > self.waitTime) {
            self.lastTime = now;

            spawnIcon();
        }
    }

    function spawnIcon(firstSpawn){
        var spawn = self.parent.settings['SPAWN'];
        var bin = self.parent.iconBin;
        var icons = self.parent.icons;

        if (bin.length < 1 || spawn['MAX'] <= icons.length) {
            if(typeof firstSpawn != "undefined"){
                self.firstSpawn = true;
            }

            return;
        }

        var type = spawn['TYPE'];

        var index = 0;
        if (type == RANDOM || type == RANDOM_REPEATING) {
            index = Math.floor(Math.random() * bin.length);
        }

        var icon = bin[index];
        if (type == RANDOM || type == ORDERED) {
            bin.splice(bin.indexOf(icon), 1);
        }

        icons.push(icon.clone());
    }

    var self = this;
    (function Constructor(parent) {
        self.parent = parent;
        self.animationID = requestAnimationFrame(draw);

        var settings = parent.settings;
        var delay = settings['SPAWN']['DELAY'];
        if (typeof delay == "number") {
            self.waitTime = delay;
        }

        if(settings['SPAWN']['ON_LOAD'] == true) {
            self.firstSpawn = true;
        }
    }).apply(this, arguments);
}

iconfall.Renderer = Renderer;
