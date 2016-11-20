import React from 'react';

/*
 * 功能:   添加事件
 * 参数:   eventType    事件类型
 *        callback      事件函数
 *        注意 只保存一份相同事件类型。组件卸载后最好将事件移除
 */
function addEventListener(eventType, callback) {

     if(window.auiEvent == null) {
         window.auiEvent = [];
     }
    if (eventType && callback && typeof callback == "function" ) {
        window.auiEvent[eventType] = callback;
    } else{
        console.warn(' eventType Not null' + 'callback must is function'  )
    }


}


/*
 * 功能:   添加事件
 * 参数:   eventType    事件类型
 */

function removeEventListener(eventType) {

    if (eventType && window.auiEvent[eventType] ) {
        delete(window.auiEvent[eventType]);
    }
}

/*
 * 功能:   触发事件
 * 参数:   eventType    事件类型
 *         arg          参数
 */

function triggerEvent(eventType, arg) {

   var fct =  window.auiEvent[eventType];

    console.log('triggerEvent',fct , typeof fct);
    if (fct && typeof fct == "function" ) {
        fct(arg);
    } else{
        console.warn(eventType +' event undefine or removed'  )
    }


}
export  {addEventListener,removeEventListener,triggerEvent}
