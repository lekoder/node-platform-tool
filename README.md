node-platform-tool
==================

#Introduction

Node-platform is a little library providing platform-specific information to your application.

#Quick start

    npm install node-platform
    
Then

```js
var platform = require('platform-tools');
```

#API

* `platform.homeDir()` returns current users home directory.
* `platform.tmpDir()`  returns system temporary directory. This is convinence alias to os.tmpdir()
* `platform.appDir(name)` returns directory that can be used as data directory for application.

#Convinience aliases

All provided methods have convinience lowercase aliases. 