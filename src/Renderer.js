if(typeof window.iconfall == "undefined"){
    window.iconfall = {};
}

function Renderer(){
    (function Constructor(iconfall){
        console.dir(iconfall);
    }).apply(this, arguments);
}

iconfall.Renderer = Renderer;
