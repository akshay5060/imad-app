var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Articles={
     'Article-one':{
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
    },
     'Article-two':{
         title:'Article Two | Akshay Bhaskar',
         heading:'Article Two | HTML and CSS',
         date:'25 Aug, 2017',
         content: `
			<h1>What is HTML?</h1>
			<p>
				HTML is a computer language devised to allow website creation. These websites can then be viewed by anyone else connected
				to the Internet. It is relatively easy to learn, with the basics being accessible to most people in one sitting; and quite
				powerful in what it allows you to create. It is constantly undergoing revision and evolution to meet the demands and
				requirements of the growing Internet audience under the direction of the » W3C, the organisation charged with designin
				and maintaining the language.
			<h1>The definition of HTML is HyperText Markup Language.</h1>
				HyperText is the method by which you move around on the web — by clicking on special text called hyperlinks which bri
				you to the next page. The fact that it is hyper just means it is not linear — i.e. you can go to any place on the
				Internet whenever you want by clicking on links — there is no set order to do things in.
				Markup is what HTML tags do to the text inside them. They mark it as a certain type of text (italicised text, for exampl).
				HTML is a Language, as it has code-words and syntax like any other language.
			</p>
            <hr/>
			<h1>What is CSS ?</h1>
			<p>
				CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to
				adapt the presentation to different types of devices, such as large screens, small screens, or printers. CSS is
				independent of HTML and can be used with any XML-based markup language
			</p>`
	        }
    
};

function CreateTemplate(data){
    var title=data.title;
    var date = data.data;
    var heading = data.heading;
    var content = data.content;
    
var htmlTemplate=`
<html>
    <head>
        <title>
           ${title}
        </title>
        <meta name="viewport" content="width=device-width,initial scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />

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
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:ArticleName', function (req, res) {
    var ArticleName =req.params.ArticleName;
  res.send(CreateTemplate(Articles[ArticleName]));
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
