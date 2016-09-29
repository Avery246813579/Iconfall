if(typeof window.iconfall == "undefined"){
    window.iconfall = {};
}

function Iconfall(){
    function createCanvas(){
        var canvas = document.createElement('canvas');

        canvas.id = "CursorLayer";
        canvas.width = 1224;
        canvas.height = 768;
        canvas.style.zIndex = 8;
        canvas.style.position = "absolute";
        canvas.style.border = "1px solid";

        document.body.appendChild(canvas);

        var image = new Image();
        image.src = "instagram.png";
    }

    (function Constructor(x){
        console.dir(x);

        createCanvas();
    }).apply(this, arguments);
}

iconfall.Iconfall = Iconfall;