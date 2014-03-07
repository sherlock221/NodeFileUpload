/**
 * 路由器
 * @param handle
 * @param pathname
 * @param response
 * @param request
 * @returns {*}
 */

function route(handle,pathname,response,request) {

    if(typeof handle[pathname] == "function"){
        return handle[pathname](response,request);
    }
    else{
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route
