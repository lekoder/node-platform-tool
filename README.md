node-platform-tool
==================

#Introduction

Node-platform is a little library providing platform-specific information to your application. Different platforms have
different environments and this library aims to provide cohesive interface to common resources, such as data or temporary
directories, without need to track platform-specific system requirements.


#Quick start

    npm install platform-tool
    
Then

```js
var platform = require('platform-tool');
```

#API

* `platform.homeDir()` returns current users home directory.
* `platform.tmpDir()`  returns system temporary directory. This is convenience alias to os.tmpdir()
* `platform.appDir(name)` returns directory that can be used as data directory for application.

#Convinience aliases

All provided methods have convenience lowercase aliases. 