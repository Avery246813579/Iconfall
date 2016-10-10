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

    this.toString = function(){
        return "(" + this.x + "," + this.y + ")";
    };

    var self = this;
    (function Constructor(x, y, t) {
        if(typeof x != "undefined"){
            self.x = x;
        }

        if(typeof y != "undefined"){
            self.y = y;
        }
    }).apply(this, arguments);
}

iconfall.Vector = Vector;