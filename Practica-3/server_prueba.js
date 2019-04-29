const http = require('http');
const fs = require('fs')
const path = require('path')

http.createServer((req,res) => {
     console.log('req was: ' + req.url);
     var cookie = req.headers.cookie;
    if (req.url == '/') {
        res.writeHead(200, { "Content-Type": "text/html" });
        var stream = fs.createReadStream('tienda.html', 'utf8');
        stream.pipe(res);
    }

    if (req.url.split(".")[1] == 'html') {
        console.log('html');
        res.writeHead(200, { "Content-Type": "text/html" });
        let html_path = path.join(__dirname, req.url)
        console.log(html_path);

        var stream = fs.createReadStream(html_path);
        stream.pipe(res);
    }
    if (req.url.split(".")[1] == 'json') {
        console.log('json');
        res.writeHead(200, { "Content-Type": "application/json" });
        let json_path = path.join(__dirname, req.url)
        console.log(json_path);

        var stream = fs.createReadStream(json_path);
        stream.pipe(res);
    } 
    if (req.url.split(".")[1] == 'js') {
        console.log('javascript');
        res.writeHead(200, { "Content-Type": "application/javascript" });
        let js_path = path.join(__dirname, req.url)
        console.log(js_path);
        
        var stream = fs.createReadStream(js_path);
        stream.pipe(res);    
    }
    if (req.url.split(".")[1] == 'ttf') {
        console.log('ttf');
        res.writeHead(200, { "Content-Type": "font/ttf" });
        let ttf_path = path.join(__dirname, req.url)
        console.log(ttf_path);
        
        var stream = fs.createReadStream(ttf_path);
        stream.pipe(res);    
    }
    if (req.url.split(".")[1] == 'css') {
        console.log('css');
        res.writeHead(200, { "Content-Type": "text/css" });
        let css_path = path.join(__dirname, req.url)
        console.log(css_path);

        var stream = fs.createReadStream(css_path);
        stream.pipe(res);
    }
    if ((req.url.split(".")[1] == "jpg") || (req.url.split(".")[1] == "jpeg")) {
      console.log("image-jpeg-jpg");
      res.writeHead(200, { "Content-Type": "image/jpeg" });
      let jpeg_path = path.join(__dirname, req.url);
      console.log(jpeg_path);

      var stream = fs.createReadStream(jpeg_path);
      stream.pipe(res);
    }
    if (req.url.split(".")[1] == "png") {
      console.log("png");
      res.writeHead(200, { "Content-Type": "image/png" });
      let png_path = path.join(__dirname, req.url);
      console.log(png_path);

      var stream = fs.createReadStream(png_path);
      stream.pipe(res);
    }
    if (req.url.split(".")[1] == "ico") {
        console.log("ico");
        res.writeHead(200, { "Content-Type": "image/x-icon" });
        let ico_path = path.join(__dirname, req.url);
        console.log(ico_path);

        var stream = fs.createReadStream(ico_path);
        stream.pipe(res);
    }
     
}
).listen(8000)