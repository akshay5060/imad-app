var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var ArticleOne={
    title:'Article One | Akshay Bhaskar',
    heading:'Article One | JavaScript',
    date:'20 Aug, 2017',
    content: `
         <p>
		    	JavaScript is a lightweight, interpreted programming language. 
		    	It is designed for creating network-centric applications. 
		    	It is complimentary to and integrated with Java. 
		    	JavaScript is very easy to implement because it is integrated with HTML. 
		    	It is open and cross-platform.
		</p>
		<p>
	    		JavaScript is a lightweight, interpreted programming language. 
		    	It is designed for creating network-centric applications. 
		    	It is complimentary to and integrated with Java. 
		    	JavaScript is very easy to implement because it is integrated with HTML. 
		    	It is open and cross-platform.
	    </p>`
};

function CreateTemplate(data){
    var title=data.title;
    var date = data.data;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate=`
        <!doctype html>
<html>
    <head>
		<link href="/ui/style.css" rel="stylesheet" />
        <title>
            ${title}
        </title>
 
       <style>
            .container{
                max-width: 800px;
                margin: 0 auto;
                color:grey;
                font-family: sans-serif;
                padding-top: 60px;
                padding-left:20px;
                padding-right:20px;
            }
            
            h1{
              text-decoration:underline;  
            }
            p{
                color:red;
            }
            body{
                Background:white;
            }
        </style>

    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <div>
            <h1>
                ${heading}
            </h1>
        </div>
        <div>
             ${date}
        </div>
        <hr/>
        <div class="center">
            ${content}
        </div>
        </div>
    </body>
</html>    
    `
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/Article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Article-one.html'));
});

app.get('/Article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Article-two.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
