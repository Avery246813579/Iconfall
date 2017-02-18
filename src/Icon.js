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

    this.tick = function () {
        this.velocity.updateLocation(this.location);
    };

    this.setLocation = function(location){
        this.location = location;
    };

    this.getLocation = function () {
        return this.location;
    };

    this.getVelocity = function () {
        return this.velocity;
    };

    this.setVelocity = function(velocity){
        this.velocity = velocity;
    };

    this.clone = function () {
        return new Icon(self.source, self.parent, self.image);
    };

    var self = this;
    (function Constructor(source, parent, image) {
        if (typeof image != "undefined") {
            this.image = image;
            this.parent = parent;

            return;
        }

        this.source = source;
        this.parent = parent;

        self.loadImage();
    }).apply(this, arguments);
}

iconfall.Icon = Icon;