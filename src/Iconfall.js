if (typeof window.iconfall == "undefined") {
    window.iconfall = {};
}

// We use this for Locational based settings
const NORTH = "NORTH", EAST = "EAST", SOUTH = "SOUTH", WEST = "WEST", RANDOM = "RANDOM";

// Spawn Types
const RANDOM_REPEATING = "RANDOM_REPEATING", ORDERED = "ORDERED", CENTER = "CENTER";
const SPAWN_SIDES = [NORTH, SOUTH, EAST, WEST];
const SPAWN_LOCATION = [RANDOM, CENTER];
const SPAWN_TYPES = [RANDOM, RANDOM_REPEATING, ORDERED];

// Edge Types
const CIRCULAR = "CIRCULAR", DESPAWN = "DESPAWN", BREAK = "BREAK";


function Iconfall() {
    /*
     Gravity:
     - Acceleration is done using Magnitude so we use 10 instead of -10.



     Velocity:
     - Velocity is the initial velocity of the icon. If gravity is on, the velocity will increase/decrease accordingly.



     Spawn:
     - Where the icon spawns from and how
     TYPES:
     - RANDOM
     - RANDOM_REPEATING
     - ORDERED

     SIDE:
     - Random
     - NORTH
     - EAST
     - SOUTH
     - WEST

     Location:
     - RANDOM
     - CENTER
     - (CUSTOM)
     - (RANGE)


     MAX: The most icons that can be loaded



     Edge:
     - What happens when the icon interacts with an edge

     Types:
     - CIRCULAR
     - DESPAWN
     - BREAK

     Axis:
     - NORTH
     - SOUTH
     - EAST
     - WEST
     - X
     - Y

     Rotations: The amount of times an icon will rotate until it will be despawned (for circular) (-1 if never despawns)
     */
    this.settings = {
        GRAVITY: {
            DIRECTION: "SOUTH",
            ACCELERATION: 10,
            TERMINAL_VELOCITY: 50,
            ENABLED: false
        },
        VELOCITY: {
            X: {
                MIN: 0,
                MAX: 0
            },
            Y: {
                MIN: 1,
                MAX: 2
            }
        },
        SPAWN: {
            SIDE: NORTH,
            LOCATION: CENTER,
            TYPE: ORDERED,
            MAX: 5,
            DELAY: 2500,
            ON_LOAD: true
        },
        EDGE: {
            TYPE: "DESPAWN",
            ROTATIONS: 3,
            AXIS: "X"
        }
    };

    this.iconBin = [];
    this.icons = [];

    this.updateCanvas = function () {
        var canvas = document.getElementById(self.id);
        this.ctx = canvas.getContext("2d");

        canvas.width = parseInt(canvas.style.width, 10);
        canvas.height = parseInt(canvas.style.height, 10);

        this.ctx.rect(0, 0, 500, 500);
        this.ctx.stroke();

        self.canvas = canvas;
    };

    this.loadIcons = function () {
        var iconData = this.iconData;

        //We have a dictionary (Assume array and location)
        if (Object.prototype.toString.call(iconData) == '[object Object]') {
            info("Icons loading as Map");

            var source = iconData['SOURCE'];
            if (typeof source == "undefined") {
                error("Couldn't find icon source");

                return;
            }

            var icons = iconData['ICONS'];
            if (typeof icons == "undefined" || Object.prototype.toString.call(icons) != "[object Array]") {
                error("Couldn't find icons. Is icons an array?" + Object.prototype.toString.call(icons));

                return;
            }

            var fileType = "";
            if (typeof iconData['FILE_TYPE'] != "undefined") {
                fileType = "." + iconData['FILE_TYPE'];
            }

            for (var j = 0; j < icons.length; j++) {
                new Icon(source + icons[j] + fileType, self);
            }
        }

        //We have an array (Assume array of icons)
        if (Object.prototype.toString.call(iconData) == "[object Array]") {
            info("Icons loading as Array");

            for (var i = 0; i < iconData.length; i++) {
                new Icon(iconData[i], self);
            }
        }

        //We have a string (Assume one icon)
        if (typeof iconData == "string") {
            info("Icons loading as String");

            new Icon(iconData, self);
        }
    };

    this.updateSettings = function (settings) {

    };

    this.getIcons = function () {
        return this.icons;
    };

    var self = this;
    (function Constructor(id, iconData) {
        this.iconData = iconData;
        this.id = id;

        self.updateCanvas();
        self.loadIcons();

        new Renderer(this);
    }).apply(this, arguments);
}

iconfall.Iconfall = Iconfall;