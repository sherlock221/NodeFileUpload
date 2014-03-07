/**
 * 启动类(main)
 * @type {exports}
 */

var http = require("http");
var url = require("url");


function start(route,handle){

    function onRequest(request, response) {
        var pathName = url.parse(request.url).pathname;

        //关闭访问favicon
        if(pathName == "/favicon.ico")
            return;

        //路由分发
        route(handle,pathName,response,request);

    }

    //创建服务器并且启动8888端口
    http.createServer(onRequest).listen(8888);
    console.log("服务器:8888 已经启动....");
}

exports.start = start;
