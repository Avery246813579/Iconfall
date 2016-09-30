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

    (function Constructor(x) {
        console.dir(x);

        createCanvas();
    }).apply(this, arguments);
}

iconfall.Iconfall = Iconfall;