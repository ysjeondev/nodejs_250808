var http = require('http');
var fs = require('fs');
var url = require('url');  //추가

var app = http.createServer(function(request, response) {
    var _url = request.url;
    var queryData = url.parse(_url,true).query;
    console.log(queryData.id);
    var title = queryData.id;  // 요청받은 쿼리 스트링 중 id 값을 title 변수에 할당

    if(_url == '/') {
        title = 'Welcome';
    }
    if(_url == '/favicon.ico') {
        return response.writeHead(404);
    }
    response.writeHead(200);

    var template = `
        <html>
            <head>
                <title>WEB1 - ${title}</title>
                <meta charset="utf-8">
            </head>
            <body>
                <h1><a href="/">WEB</a></h1>
                <ol>
                    <li><a href="/?id=HTML">HTML</a></li>
                    <li><a href="/?id=css">CSS</a></li>
                    <li><a href="/?id=JavaScript">JavaScript</a></li>
                </ol>
                <h2>${queryData.id}</h2>
                <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
                <img src="coding.jpg" width="100%">
                </p><p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.
                </p>
            </body>
        </html>
        `;
        
    response.end(template)
    //response.end(fs.readFileSync(__dirname + _url));
});
app.listen(3000);
