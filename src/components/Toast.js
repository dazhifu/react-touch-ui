import React from 'react';

import assign from 'object-assign'
import classnames from 'classnames';

import { View }  from   "./View.js"
import Utils from   "./common/Utils.js"

import  './Toast.scss'
import  Config   from   "./common/Config.js"

import DOM from "react-dom"


/*
 显示 toast
 param    messsage    消息
 time        消失时间
 */
function showTost(message, time) {

    var tt = time || 2000;
    var CLASS_ACTIVE = 'aui-active';
    var toast = document.createElement('div');
    toast.classList.add('aui-toast-container');
    toast.innerHTML = '<div class="' + 'aui-toast-message' + '">' + message + '</div>';
    toast.addEventListener('webkitTransitionEnd', function () {
        if (!toast.classList.contains(CLASS_ACTIVE)) {
            toast.parentNode.removeChild(toast);
        }
    });
    document.body.appendChild(toast);
    toast.offsetHeight;
    toast.classList.add(CLASS_ACTIVE);
    setTimeout(function () {
        toast.classList.remove(CLASS_ACTIVE);
    }, tt);
}


var loadingDiv;
/*
 * 功能: 显示 ialog
 * 参数:  title    标题
 *
 */

function showLoading(title) {


    var abc =
        (
            <div >
                <div className="aui-mask_transparent"></div>
                <div className="aui-toast">
                    <i className="aui-loading aui-icon_toast"></i>
                    <p className="aui-toast__content">{title}</p>
                </div>
            </div>
        );
    const div = document.createElement("div");
    loadingDiv = div;
    //   div.className = "aui-mask"
    document.body.appendChild(div);
    DOM.render(abc, div)

}

function stopLoading() {
    DOM.unmountComponentAtNode(loadingDiv);
    document.body.removeChild(loadingDiv);
}
export  {showTost,showLoading,stopLoading}
