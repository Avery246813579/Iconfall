if (typeof window.iconfall == "undefined") {
    window.iconfall = {};
}

function Vector() {
    this.x = 0;
    this.y = 0;

    this.updateLocation = function(location){
        location.increment(this.x, this.y);
    };

    this.update = function(x, y){
        this.x = x;
        this.y = y;
    };

    (function Constructor(x, y, t) {

    }).apply(this, arguments);
}

iconfall.Vector = Vector;