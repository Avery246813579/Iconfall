if(typeof window.iconfall == "undefined"){
    window.iconfall = {};
}

function Location(){
    this.x = 0;
    this.y = 0;

    this.update = function(x, y){
        this.x = x;
        this.y = y;
    };

    this.increment = function(x, y){
        this.x += x;
        this.y += y;
    };

    this.getX = function(){
        return this.x;
    };

    this.setX = function(x){
        this.x = x;
    };

    this.setY = function(y){
        this.y = y;
    };

    this.getY = function(){
        return this.y
    };

    this.toString = function(){
        return "(" + this.x + "," + this.y + ")";
    };

    this.setLocation = function(location){
        this.location = location;
    };

    var self = this;
    (function Constructor(x, y){
        if(typeof x != "undefined"){
            self.x = x;
        }

        if(typeof y != "undefined"){
            self.y = y;
        }
    }).apply(this, arguments);
}

iconfall.Location = Location;