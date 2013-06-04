#Impression Cards
Card type structure showing information about a particular person.

##Libraries, Frameworks, Utilities
- [AngularJs](http://angularjs.org/)
- [angular-seed](https://github.com/angular/angular-seed)
- [Bootstrap](http://twitter.github.io/bootstrap/)
- [JSON3](https://github.com/bestiejs/json3)

##Server
This project is server agnostic and can be hosted on any web server that can serve up static html pages. However, for 
convenience, I have included a Node server. I have detailed what I did to the server to get it to work for me and how 
you can start the server up yourself.

###Node Server
This section assumes you have knowledge about and have already installed [NodeJS](http://nodejs.org/) on your machine.

My Node server configuration and code can be found under 
[/scripts/webserver.js](https://github.com/decoy31/ImpressionCards/blob/master/scripts/web-server.js). Most of the
code is a combination of
[angular-seed's webserver.js](https://github.com/angular/angular-seed/blob/master/scripts/web-server.js) and the 
AngularJS Fundamentals 

####Node Package Prerequisite
The following [NPM](https://npmjs.org/) package must be installed either locally under the 
[/scripts](https://github.com/decoy31/ImpressionCards/blob/master/scripts) directory or globally on your machine
before the Node server will function properly:

- [path](https://npmjs.org/package/path)

####Node Server Startup
To start up the server on a Windows machine you need to make sure you start the server under the correct working  
directory. To do this, browse to the ImpressionCard project's "app" directory in the command prompt. Then type 
the following:

```dos
C:/ImpressionCards/app> node ../scripts/web-server.js
```

Notice when we are starting the node server our working directory is the "app" folder.
