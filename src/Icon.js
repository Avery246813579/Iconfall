if (typeof window.iconfall == "undefined") {
    window.iconfall = {};
}

function Icon() {
    this.velocity = new Vector(1, 1);
    this.location = new Location(-50, -50);

    this.loadImage = function () {
        var self = this;
        var image = this.image = new Image();
        var source = self.source;

        image.src = source;

        image.onload = function () {
            info("Loaded icon at \"" + source + "\"");
            self.parent.icons.push(self);
        };

        image.onerror = function () {
            error("Failed to load icon at \"" + source + "\"");
        };
    };

    this.tick = function () {
        this.velocity.updateLocation(this.location);
    };

    this.getLocation = function () {
        return this.location;
    };

    var self = this;
    (function Constructor(source, parent) {
        this.source = source;
        this.parent = parent;

        self.loadImage();

        var floor = Math.floor(Math.random() * 500);
        self.getLocation().setX(floor);
    }).apply(this, arguments);
}

iconfall.Icon = Icon;