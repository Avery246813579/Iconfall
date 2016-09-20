if(typeof window.globalTest == "undefined"){
    window.globalTest = {};
}

function Test(){
    var self = this;

    (function Constructor(test){
        console.dir(test);
    }).apply(self, arguments);
}

globalTest.Test = Test;