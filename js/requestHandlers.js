
var fs  = require("fs");
var formidable = require("formidable");


/**
 * 显示页面
 * @param response
 */
function page(response,request) {
    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" '+
        'content="text/html; charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" enctype="multipart/form-data" '+
        'method="post">'+
        '<input type="file" name="upload">'+
        '<input type="submit" value="上传文件" />'+
        '</form>'+
        '</body>'+
        '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

/**
 * 上传图片(重命名)
 * @param response
 * @param request
 */
function upload(response,request) {
    var form = new formidable.IncomingForm();
    form.parse(request, function(error, fields, files) {
         console.log("fomr parse....");
        fs.renameSync(files.upload.path, "/tmp/js.png");
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("received image:<br/>");
        response.write("<img src='/show' />");
        response.end();
    });
}


/**
 * 显示图片
 * @param response
 * @param request
 */
function show(response, request) {
    fs.readFile("/tmp/js.png", "binary", function(error, file) {
        if(error) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {"Content-Type": "image/png"});
            response.write(file, "binary");
            response.end();
        }
    });
}

exports.upload = upload;
exports.show = show;
exports.page = page;
