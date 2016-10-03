if (typeof window.iconfall == "undefined") {
    window.iconfall = {};
}

function Iconfall() {
    function updateCanvas() {
        var canvas = document.getElementById(self.id);
        var ctx = canvas.getContext("2d");

        canvas.width = 100;
        canvas.height = 100;
    }

    this.loadIcons = function(){
        this.icons = [];

        for(var i = 0; i < this.iconLocations.length; i++){
            var icon = this.iconLocations[i];

            this.icons.push(new Icon(icon));
        }
    };

    this.getIcons = function(){
        return this.icons;
    };

    var self = this;
    (function Constructor(id, icons) {
        this.iconLocations = icons;
        this.id = id;

        self.loadIcons();

        updateCanvas();

        new Renderer(this);
    }).apply(this, arguments);
}

iconfall.Iconfall = Iconfall;