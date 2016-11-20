import React from 'react';

import assign from 'object-assign'
import classnames from 'classnames';

import { View }  from   "./View.js"
import Utils from   "./common/Utils.js"

import  './Dialog.scss'
import  Config   from   "./common/Config.js"
import DOM from "react-dom"


var tipMask;
var leftFunction, rightFunction,buttonFunction;


function onButtonTouchTap(e) {

    DOM.unmountComponentAtNode(tipMask);
    document.body.removeChild(tipMask);

    if (buttonFunction) {
        buttonFunction();
    }
}
function onLeftTouchTap(e) {
    DOM.unmountComponentAtNode(tipMask);
    document.body.removeChild(tipMask);

    if (leftFunction) {
        leftFunction();
    }
}
function onRightTouchTap(e) {
    DOM.unmountComponentAtNode(tipMask);
    document.body.removeChild(tipMask);
    if (rightFunction) {
        rightFunction();
    }
}
/*
 * 功能: 显示 ialog
 * 参数:  title    标题
 *       content  提示内容
 *       leftButtonTitle               左button 标题
 *       rightButtonTitle              右button 标题
 *       leftButtonTitleFunction       左事件
 *       rightButtonTitleFunction      右事件
 *
 *  注意     如果是一个button 只传任意一个 leftButtonTitle 就可以
 *
 */

function showDialogConfirm(title, content, leftButtonTitle, rightButtonTitle, leftButtonTitleFunction, rightButtonTitleFunction) {
    leftFunction = leftButtonTitleFunction;
    rightFunction = rightButtonTitleFunction;

    var abc =
        (
            <View className="aui-dialog">
                <View className="aui-dialog__hd"><strong className="aui-dialog__title">{title}</strong></View>
                <View className="aui-dialog__bd"> {content}</View>
                <View className="aui-dialog__ft">
                    <View onTouchTap={onLeftTouchTap}
                          className="aui-dialog__btn aui-dialog__btn_default">{leftButtonTitle}</View>
                    <View onTouchTap={onRightTouchTap}
                          className="aui-dialog__btn aui-dialog__btn_default">{rightButtonTitle}</View>
                </View>
            </View>
        );
    const div = document.createElement("div");
    tipMask = div;
    div.className = "aui-mask";
    document.body.appendChild(div);
    DOM.render(abc, div)

}

/*
 * 功能: 显示 警告  dialog
 * 参数:  title    标题
 *       content  提示内容
 *       leftButtonTitle               左button 标题
 *       rightButtonTitle              右button 标题
 *       leftButtonTitleFunction       左事件
 *       rightButtonTitleFunction      右事件
 *
 *  注意     如果是一个button 只传任意一个 leftButtonTitle 就可以
 *
 */

function showDialogWarning( content, buttonTitle, buttonTitleFunction) {
    buttonFunction = buttonTitleFunction;

        var abc = (
            <View className="aui-dialog">
                <View className="aui-dialog__bd">{content}</View>
                <View className="aui-dialog__ft" onTouchTap={onButtonTouchTap}>
                    <View className="aui-dialog__btn aui-dialog__btn_default">{buttonTitle}</View>
                </View>
            </View>
        );

    const div = document.createElement("div");
    tipMask = div;
    div.className = "aui-mask";
    document.body.appendChild(div);
    DOM.render(abc, div)

}



export  {showDialogConfirm,showDialogWarning}

