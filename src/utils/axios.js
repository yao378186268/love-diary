"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var service = axios_1["default"].create({
    baseURL: '121.5.130.175:9998',
    timeout: 10000
});
var http = {
    get: function (path, params) {
        return service.get(path, { params: params });
    }
};
console.log(http);
exports["default"] = http;
