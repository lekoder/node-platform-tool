var os   = require('os'),
    path = require('path');

function homeDir() {
    return process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
}

// @Todo: check if directory is writeable/usable
function appDir( appName ) {

    if ( !appName instanceof String ) throw new TypeError("appName must be a String");
    if ( !appName ) throw new Error("appName is required");

    if ( process.env.APPDATA ) {
        return path.join( process.env.APPDATA, appName );
    }

    return path.join( homeDir(), '.'+appName );
}

module.exports = {

    homeDir: homeDir,
    homedir: homeDir,

    tmpdir:  os.tmpdir,
    tmpDir:  os.tmpdir,

    appDir: appDir,
    appdir: appDir
};

