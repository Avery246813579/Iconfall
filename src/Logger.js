const VERSION = "v1.0.0";
const INFO = "INFO", WARNING = "WARNING", ERROR = "ERROR";
const VERBOSE = true;

function log(prefix, message){
    console.log("Iconfall " + prefix + " >> " + message);
}

function info(message) {
    if (VERBOSE) {
        log(INFO, message);
    }
}

function error(message) {
    log(ERROR, message);
}