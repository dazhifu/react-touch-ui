import React from 'react';

import $ from "jquery";


/*
 * 功能:  请求网络数据
 * 参数:  url     --- 服务器url
 *       params  --- 参数
 * 返回:  null
 * 主要默jsonp
 * 使用方法: 引入 import {request} from "../utils/Request.js";    request(url, '参数').then(function(response){})
 */
var request = function(url, params) {

    // console.log("debug:"+CONFIG.api+CONFIG.interface);
    // console.log(url);
    var error = {res: "error", msg: "数据请求错误", table: [[]]};
    return new Promise(function(resolve, reject) {
        $.ajax({
            url:url,
            data:params,
            dataType:'jsonp',
            timeout: 30000,
            type:'GET',
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                console.warn(textStatus, errorThrown);
                resolve(error);
            },
            success: function(response) {
                if (response) {

                    resolve(str);
                } else {
                    resolve(error);
                }
            }
        })
    })
};

export {  request };
