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

    this.getY = function(){
        return this.y
    };

    this.toString = function(){
        return "(" + this.x + "," + this.y + ")";
    };

    (function Constructor(){

    }).apply(this, arguments);
}

iconfall.Location = Location;