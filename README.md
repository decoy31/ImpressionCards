#ImpressionCards

The ImpressionCards project comes with sample data sets including some simple user information and sample
logs for each user. The log data set describes one month of "impressions", "conversions", and "revenue" associated with
each user. ImpressionCard aggregates the sample data into a card format, enabling quick, easy access to
user information for stakeholders.

##Libraries, Frameworks, Utilities, etc.

The following are libraries, frameworks, utilities, and other code I used for this project. Use the following links to 
as a reference when working with this project:

- [angular-seed](https://github.com/angular/angular-seed)
- [AngularJS](http://angularjs.org/)
- [AngularJS Fundamentals exercise files](http://pluralsight.com/training/Courses/ExerciseFiles/angularjs-fundamentals) 
([Pluralsight](http://pluralsight.com/) training course; paid subscription required to access files)
- [Bootstrap](http://twitter.github.io/bootstrap/)
- [jQuery](http://jquery.com/)
- [JSON3](https://github.com/bestiejs/json3)

I apologize for the paid subscription link for the Pluralsight training course. Out of respect for the staff at 
Pluralsight and all their hard work helping me learn many different programming topics, I will not post the exercise
files. I am just giving credit where credit is due. In additon, I did not want to get in trouble for posting all of the 
exercise files on GitHub, not to mention, I paid a lot of money for the subscription. The one file I used from the 
exercise files was the [web-server.js](https://github.com/decoy31/ImpressionCards/blob/master/scripts/web-server.js) 
file, for which, I customized to my needs for this project.

##Server
This project is server agnostic and can be hosted on any web server that can serve up static html pages.

###Node Server
For convenience, I have included a Node server configuration in the project. This section assumes you have knowledge
about and have already installed [NodeJS](http://nodejs.org/) on your machine.

The Node server configuration in the project can be found under
[/scripts/web-server.js](https://github.com/decoy31/ImpressionCards/blob/master/scripts/web-server.js). Most of the
code is a combination of
[angular-seed's web-server.js](https://github.com/angular/angular-seed/blob/master/scripts/web-server.js) and code from
the [AngularJS Fundamentals](http://pluralsight.com/training/Courses/TableOfContents/angularjs-fundamentals) training
course on [Pluralsight](http://pluralsight.com/). However, I did add the following functions to the end of the
[web-server.js](https://github.com/decoy31/ImpressionCards/blob/master/scripts/web-server.js) file:

- mkFile
- processUsers
- processLogs
- addJsonArray
- processLogFiles

"processUsers" and "processLogs" functions take sample json data I received for this project (see
[users.json](https://github.com/decoy31/ImpressionCards/blob/master/app/data/users.json) and
[logs.json](https://github.com/decoy31/ImpressionCards/blob/master/app/data/logs.json)) and piece the data out into
individual files based on the "user_id" property of each of the objects in the json files. The end result of each
function call can be found under 
[/app/data/users](https://github.com/decoy31/ImpressionCards/tree/master/app/data/users) and 
[/app/data/logs](https://github.com/decoy31/ImpressionCards/tree/master/app/data/logs), repectively.

The title of each file is the user id and the content of each file relates to the file title's user id for the given 
context (e.g: logs have the log information specific to the user matching the file title's user id). This allows me to 
take a more RESTful approach for accessing the project's data. Therefore, if I want to get the logs for the user with 
an id of 3, I simply access the following URL: "http://localhost/data/logs/3". As a nice side effect, piecing out the 
data like I did, makes for less data having to go over the "wire".

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
C:\ImpressionCards\app> node ..\scripts\web-server.js
```

Notice when we are starting the node server our working directory is the "app" folder.

##Choices and Reasons

###AngularJS
I chose to go with [AngularJs](http://angularjs.org/) for both its power and simplity. I like the AMD approach
AngularJS took where code is split up into modules. Also, AngularJS' templating system is really useful when 
aggregating data. I have used a somewhat similar designed toolkit called [Dojo](http://dojotoolkit.org/), but 
AngularJS makes more sense to me.

###Bootstrap
One of the requirements for this project was to layout the cards in a grid pattern. The pattern also had to be a
responsive design; able to be viewed on different platforms. I had never used
[Bootstrap](http://twitter.github.io/bootstrap/) before this project (and I am still learning), but what I have
learned is it applies well for the grid requirement.

###Why is the UI Not Finished?
Unfortunately, when I started this project on Friday, May 31st, 2013, I did not know AngularJS or Bootstrap. I spent a 
considerable amount of time (about 18 hours) over that weekend to learn AngularJS through the
[AngularJS Fundamentals](http://pluralsight.com/training/Courses/TableOfContents/angularjs-fundamentals) training
course on [Pluralsight](http://pluralsight.com/) and Bootstrap from the project's website. You can view my Pluralsight 
course work in each of the branches of my forked version of the 
[angular-seed project](https://github.com/angular/angular-seed) in 
[my angular-seed repository](https://github.com/decoy31/angular-seed/branches). As of noon on Tuesday, June 4th, 2013,
the ImpressionCards project is still a work in progress. All tolled, I have spent close to 40 hours on this project; 
a good chunk of my free time. But I figure, what I learned from this project will definitely help me anytime in the 
future.
