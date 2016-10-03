if (typeof window.iconfall == "undefined") {
    window.iconfall = {};
}

function Iconfall() {
    function createCanvas() {
        var canvas = document.getElementById('dog');
        var ctx = canvas.getContext("2d");

        canvas.width = 100;
        canvas.height = 100;

        var image = new Image();
        image.src = "instagram.png";

        image.onload = function () {
            ctx.drawImage(image, 0, 0, 50, 50);
        };
    }

    this.loadIcons = function(){
        this.icons = [];

        for(var i = 0; i < this.iconLocations.length; i++){
            var icon = this.iconLocations[i];

            this.icons.push(new Icon(icon));
        }
    };

    var self = this;
    (function Constructor(icons) {
        this.iconLocations = icons;

        this.loadIcons();

        new Renderer(self);
    }).apply(this, arguments);
}

iconfall.Iconfall = Iconfall;