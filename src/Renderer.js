if(typeof window.iconfall == "undefined"){
    window.iconfall = {};
}

function Renderer(){
    this.animationID = undefined;

    function draw(){
        clearCanvas();

        for(var i = 0; i < self.parent.getIcons().length; i++){
            var icon = self.parent.getIcons()[i];

            var iLocation = icon.getLocation();
            self.parent.ctx.drawImage(icon.image, icon.getLocation().getX(), icon.getLocation().getY(), 50, 50);

            if(iLocation.getX() > self.parent.canvas.width + 40){
                iLocation.setX(-40);
            }

            if(iLocation.getY() > self.parent.canvas.height + 40){
                iLocation.setY(-40);
            }

            //console.dir(icon.getLocation().toString());
            icon.tick();
        }

        self.animationID = requestAnimationFrame(draw);
    }

    function clearCanvas(){
        self.parent.ctx.clearRect(0, 0, self.parent.canvas.width, self.parent.canvas.height);
        self.parent.ctx.beginPath();
    }

    var self = this;
    (function Constructor(parent){
        self.parent = parent;
        self.animationID = requestAnimationFrame(draw);
    }).apply(this, arguments);
}

iconfall.Renderer = Renderer;
