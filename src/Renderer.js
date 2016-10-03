if(typeof window.iconfall == "undefined"){
    window.iconfall = {};
}

function Renderer(){
    this.animationID = undefined;

    function draw(){
        for(var i = 0; i < self.parent.getIcons().length; i++){
            var icon = self.parent.getIcons()[i];

            icon.tick();
        }

        self.animationID = requestAnimationFrame(draw);
    }

    var self = this;
    (function Constructor(parent){
        self.parent = parent;
        self.animationID = requestAnimationFrame(draw);
    }).apply(this, arguments);
}

iconfall.Renderer = Renderer;
