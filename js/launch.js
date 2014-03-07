/**
 * Created by gbdai on 14-3-7.
 */

var server = require("./server");
var router  = require("./route");

var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.page;
handle["/page"] = requestHandlers.page;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

//启动服务器
server.start(router.route,handle);