if (typeof window.iconfall == "undefined") {
    window.iconfall = {};
}

function Icon() {
    this.velocity = new Vector();
    this.location = new Location();

    this.loadImage = function () {
        var self = this;
        this.image = new Image();
        this.image.src = this.source;

        this.image.onload = function(){
            info("Loaded icon at \"" + self.source + "\"");
        };

        this.image.onerror = function(){
            error("Failed to load icon at \"" + self.source + "\"");
        };
    };

    this.tick = function (){
        this.velocity.updateLocation(this.location);
    };

    this.getLocation = function(){
        return this.location;
    };

    (function Constructor(source) {
        this.source = source;

        this.loadImage();
    }).apply(this, arguments);
}

iconfall.Icon = Icon;