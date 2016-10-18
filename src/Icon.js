if (typeof window.iconfall == "undefined") {
    window.iconfall = {};
}

function Icon() {
    this.velocity = new Vector(1, 1);
    this.location = new Location(-50, -50);
    this.valid = true;

    this.loadImage = function () {
        var self = this;
        var image = this.image = new Image();
        var source = self.source;

        image.src = source;

        image.onload = function () {
            info("Loaded icon at \"" + source + "\"");
            self.parent.iconBin.push(self);
        };

        image.onerror = function () {
            error("Failed to load icon at \"" + source + "\"");

            self.valid = false;
        };
    };

    this.loadLocation = function () {
        var spawn = self.parent.settings['SPAWN'];
        var canvas = self.parent.canvas;

        var side = spawn['SIDE'];
        if(typeof spawn['SIDE'] == ""){

        }

        if (spawn['SIDE'] == RANDOM) {
            side = SPAWN_SIDES[Math.floor(Math.random() * SPAWN_SIDES.length)];
        }

        if (SPAWN_SIDES.indexOf(side) == -1) {
            error("Couldn't find icon spawn side. Setting to default (NORTH)");

            side = NORTH;
        }

        var magnitude = canvas.width, location;
        if (side == EAST || side == WEST) {
            magnitude = canvas.height;
        }

        var lType = spawn['LOCATION'];
        if (typeof lType != "number") {
            if (SPAWN_LOCATION.indexOf(lType) == -1) {
                error("Couldn't find icon spawn type. Setting to default (RANDOM)");

                lType = RANDOM;
            }

            if (lType == CENTER) {
                location = magnitude / 2;
            }

            if (lType == RANDOM) {
                location = Math.floor(Math.random() * magnitude);
            }
        }

        if (side == NORTH || side == SOUTH) {
            this.getLocation().setX(location);
        }

        if (side == EAST || side == WEST) {
            this.getLocation().setY(location);
        }
    };

    this.tick = function () {
        this.velocity.updateLocation(this.location);
    };

    this.getLocation = function () {
        return this.location;
    };

    this.getVelocity = function () {
        return this.velocity;
    };

    this.clone = function () {
        return new Icon(self.source, self.parent, self.image);
    };

    var self = this;
    (function Constructor(source, parent, image) {
        if (typeof image != "undefined") {
            this.image = image;
            this.parent = parent;

            self.loadLocation();
            return;
        }

        this.source = source;
        this.parent = parent;

        self.loadImage();
        self.loadLocation();
    }).apply(this, arguments);
}

iconfall.Icon = Icon;