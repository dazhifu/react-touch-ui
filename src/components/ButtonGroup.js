import React from 'react';
import assign from 'object-assign'
import classnames from 'classnames';
import { View }  from   "./View.js"
import Utils from   "./common/Utils.js"

import  Config   from   "./common/Config.js"
import {  HLayout}  from   "../components/HLayout.js"


export class ButtonGroup extends React.Component {

    static propTypes = {
        fontSize: React.PropTypes.string,       // 字体大小
        fontColor: React.PropTypes.string,      // 字体颜色
        selFontColor: React.PropTypes.string,   // 选中字体颜色
        bgColor: React.PropTypes.string,         // 背景颜色
        selBgColor: React.PropTypes.string,      // 选中背景颜色
        borderColor: React.PropTypes.string,      // 点击后颜色
        p: React.PropTypes.string,                 // padding
        /*
        *  切换事件
        *  参数: e      事件
        *       index  选中index
        * */
        onSwich:React.PropTypes.func,
    };

    static defaultProps = {
        fontSize: Config.ButtonGroupFontSize,       // 字体大小
        fontColor: Config.ButtonGroupFontColor,      // 字体颜色
        selFontColor: Config.ButtonGroupSelFontColor,   // 选中字体颜色
        bgColor: Config.ButtonGroupBgColor,         // 背景颜色
        selBgColor: Config.ButtonGroupSelBgColor,      // 选中背景颜色
        borderColor: Config.ButtonGroupBorderColor,    // 边框颜色
        p: Config.ButtonGroupP,                 // padding
        selIndex: 0
    };

    constructor(props) {
        super(props);
        const {
            fontSize,
            fontColor,
            selFontColor,
            bgColor,
            selBgColor,
            borderColor,
            p,
            selIndex
            } = this.props;
        this.state = {
            fontSize:fontSize,
            fontColor:fontColor,
            selFontColor:selFontColor,
            bgColor:bgColor,
            selBgColor:selBgColor,
            borderColor:borderColor,
            p:p,
            selIndex:selIndex
        };
    };



    /*
     * 功能:  每个item点击事件
     * 参数:  null
     * 返回:  null
     * 注意:  根据e._targetInst._currentElement.props.tag 区分是哪个item
     */
    onTouchTap(e) {
        this.setState({selIndex:e._targetInst._currentElement.props.tag});
        if(this.props.onSwich){
            this.props.onSwich(e,this.state.selIndex);
        }
        e.preventDefault()

    }

    /*
     * 功能:  生成item组件
     * 参数:   isSel         是否被选中
     *        isHead        是否是第一个 第一个需要加border
     *        isEnd         是否是最后一个 最后一个需要加border
     *        borderColr    border 颜色
     *        selColor      选中背景颜色
     *        fontColor     字体颜色
     *        selFontColor  选中字体颜色
     *        p,            padding 值
     *        tag           item唯一标示
     *        lable         item显示lable
     * 返回:  object  item组件
     */
    getItem(isSel, isHead, isEnd, borderColr, selColor, fontColor, selFontColor, p, tag,lable) {

        var br, bgColor, b, ml, fc;
        if (isHead) {
            br = "4px 0 0 4px"

        } else {
            ml = '-1'
        }
        if (isEnd) {
            br = "0 4px 4px 0"
        }
        fc = fontColor;
        if (isSel) {
            bgColor = selColor;
            fc = selFontColor;
        }
        b = "1px solid " + borderColr;


        return (
            <View p={p} b={b} ml={ml} br={br } fontColor={fc} bgColor={bgColor} tag ={tag} onTouchTap={this.onTouchTap.bind(this)}>
                {lable}
            </View>
        )

    }

    render() {

        const {
            fontSize,
            fontColor,
            selFontColor,
            bgColor,
            selBgColor,
            borderColor,

            items,
            p,
            ...props
            } = this.props;

        var itemsch = [];
        for (var i = 0; i < items.length; i++) {

            var isHead, isEnd;
            i == 0 ? isHead = true : isHead = false;
            i == (items.length - 1) ? isEnd = true : isEnd = false;
            var issel = false;
            if (i == this.state.selIndex) {
                issel = true;
            }
            var item = this.getItem(issel, isHead, isEnd, this.state.borderColor, this.state.selBgColor, this.state.fontColor, this.state.selFontColor, this.state.p, i,items[i]);
            itemsch.push(item);
        }

        return (
            <HLayout  {    ...props}>
                {itemsch}
            </HLayout>
        );

    }
}


