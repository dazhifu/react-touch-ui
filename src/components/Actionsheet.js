import React from 'react';

import assign from 'object-assign'
import classnames from 'classnames';

import { View }  from   "./View.js"
import Utils from   "./common/Utils.js"

import  './Actionsheet.scss'
import  Config   from   "./common/Config.js"
import DOM from "react-dom"


var tipMask;
var leftFunction, rightFunction, buttonFunction;

/*
 * 功能:  确认点击事件
 * 参数:  null
 * 返回:  null
 */

function onSelTouchTap(e) {

    document.body.removeChild(tipMask);

    if (buttonFunction) {
        buttonFunction(e,e._targetInst._currentElement.props.tag);
    }
}

/*
 * 功能:  取消点击事件
 * 参数:  null
 * 返回:  null
 */
function onCancelTouchTap(e) {
    document.body.removeChild(tipMask)
}
/*
 * 功能: 显示 ialog
 * 参数:  title    标题
 *       onSel    选中回调
 *
 *  注意     如果是一个button 只传任意一个 leftButtonTitle 就可以
 *
 */

function showActionsheetIOS(title, onSel) {
    var i = 0;
    buttonFunction =onSel;
    var abc =
        (
            <View>
                <View className="aui-mask" onTouchTap={onCancelTouchTap}></View>
                <View className="aui-actionsheet aui-actionsheet_toggle">
                    <View className="aui-actionsheet__menu">
                        {
                            title.map((item,i) =>

                                <div className="aui-actionsheet__cell" tag ={i}  onTouchTap= {onSelTouchTap}>{item}  </div>
                            )
                        }
                    </View>
                    <View className="aui-actionsheet__action" onTouchTap={onCancelTouchTap}>
                        <View className="aui-actionsheet__cell">取消</View>
                    </View>
                </View>
            </View>
        );
    const div = document.createElement("div");
    tipMask = div;
    //div.className = "aui-mask"
    document.body.appendChild(div);
    DOM.render(abc, div)

}


/*
 * 功能: 显示 ialog
 * 参数:  title    标题
 *       onSel    选中回调
 *
 *  注意     如果是一个button 只传任意一个 leftButtonTitle 就可以
 *
 */

function showActionsheet(title, onSel) {

    var i = 0;

    buttonFunction =onSel;
    var abc =
        (
            <View  className='aui-skin_android'>
                <View className="aui-mask" onTouchTap={onCancelTouchTap}></View>
                <View className="aui-actionsheet aui-actionsheet_toggle">
                    <View className="aui-actionsheet__menu">
                        {
                            title.map((item,i) =>

                                <div className="aui-actionsheet__cell" tag ={i}  onTouchTap= {onSelTouchTap}>{item}  </div>
                            )

                        }
                    </View>
                    <View className="aui-actionsheet__action" onTouchTap={onCancelTouchTap}>
                        <View className="aui-actionsheet__cell">取消</View>
                    </View>
                </View>
            </View>
        );
    const div = document.createElement("div");
    tipMask = div;
    //div.className = "aui-mask"
    document.body.appendChild(div);
    DOM.render(abc, div)

}



export  {showActionsheet,showActionsheetIOS}

