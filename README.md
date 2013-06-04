#Impression Cards
Card type structure showing information about a particular person.

##Libraries, Frameworks, Utilities
- [AngularJs](http://angularjs.org/)
- [angular-seed](https://github.com/angular/angular-seed)
- [Bootstrap](http://twitter.github.io/bootstrap/)
- [JSON3](https://github.com/bestiejs/json3)

##Server
This project is server agnostic and can be hosted on any web server that can serve up static html pages.

###Node Server
For convenience, I have included a Node server configuration in the project. This section assumes you have knowledge 
about and have already installed [NodeJS](http://nodejs.org/) on your machine.

The Node server configuration in the project can be found under 
[/scripts/webserver.js](https://github.com/decoy31/ImpressionCards/blob/master/scripts/web-server.js). Most of the
code is a combination of
[angular-seed's webserver.js](https://github.com/angular/angular-seed/blob/master/scripts/web-server.js) and code from 
the [AngularJS Fundamentals](http://pluralsight.com/training/Courses/TableOfContents/angularjs-fundamentals) training 
course on [Pluralsight](http://pluralsight.com/). However, I did add the following functions to the end of the 
[webserver.js](https://github.com/decoy31/ImpressionCards/blob/master/scripts/web-server.js) file:

- mkFile
- processUsers
- processLogs
- addJsonArray
- processLogFiles

"processUsers" and "processLogs" functions take sample json data I recieved for this project (see 
[users.json](https://github.com/decoy31/ImpressionCards/blob/master/app/data/users.json) and 
[logs.json](https://github.com/decoy31/ImpressionCards/blob/master/app/data/logs.json)) and piece the data out into 
individual files based on the "user_id" property of each of the objects in the json files. The end result of each 
function call can be found under [/app/data/logs](https://github.com/decoy31/ImpressionCards/tree/master/app/data/logs) 
and [/app/data/users](https://github.com/decoy31/ImpressionCards/tree/master/app/data/users).

The title of each file is the user id and the content of each file relates to title's user id for the given context 
(e.g: logs have the log information specific to the user matching the file title's user id). This allows me to take a 
more RESTful approach for accessing the project's data. Therefore, if I want to get the logs for the user with an id 
of 3, I simply type in the following URL: "http://localhost/data/logs/1".

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

##Choices and Reasons

###AngularJS
I chose to go with [AngularJs](http://angularjs.org/) for both its power and simplity. I like the AMD approach, where 
code is split up into to modules and the templating system is really useful when aggrating data. I have used a somewhat 
similar designed tookit called [Dojo](http://dojotoolkit.org/), but AngularJS makes more sense to me.

###Bootstrap
One of the requirements for this project was to layout the cards in a grid pattern. The pattern also had to be a 
responsive design; able to be viewed on different platforms. I had never used 
[Bootstrap](http://twitter.github.io/bootstrap/) before this project (and I am still learning), but what I have 
learned is it applies well for the grid requirement.

###Why is the UI Not Finished?
Unfortunately, I did not know AngularJS before starting this project Friday, May 31st, 2013. I took about 18 hours 
over that weekend to learn AngularJS through the 
[AngularJS Fundamentals](http://pluralsight.com/training/Courses/TableOfContents/angularjs-fundamentals) training 
course on [Pluralsight](http://pluralsight.com/) and Bootstrap from the project's website. As of noon on June 4th, 2013, 
the project is still a work in progress. All tolled, I have spent close to 40 hours on this project, a good chunk of
my free time. But I figure, what I learned from this project, will definately help me anytime in the future.
