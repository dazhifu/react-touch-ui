import React from 'react';

import assign from 'object-assign'
import classnames from 'classnames';
import Utils from   "./common/Utils.js"
import {View} from   "./View.js"
import {HLayout} from   "./HLayout.js"
import {VLayout} from   "./VLayout.js"
import Config from   "./common/Config.js"
import IOBack from 'react-icons/lib/io/ios-gear-outline';


export class TabBarItem extends React.Component {


    static propTypes = {
        bgColor: React.PropTypes.string,           // 背景颜色
        lable: React.PropTypes.string,             // title 文字
        fontSize: React.PropTypes.string,          // title字体大小
        fontColor: React.PropTypes.string,         // 字体颜色
        iconColor: React.PropTypes.string,         // nav bar 背景颜色

        selFontColor: React.PropTypes.string,         // 选中字体颜色
        selIconColor: React.PropTypes.string,         // 选中bar 背景颜色

        iconSize: React.PropTypes.string,          // 字体颜色
        onTouchTap: React.PropTypes.func,          // 左item  tap 回调函数
        isSel:React.PropTypes.bool,
        componentTag: React.PropTypes.string     // 固定组件标示, 共tabbar使用

    };

    static defaultProps = {
        bgColor: Config.TabBarItemBgColor,
        icon: Config.TabBarItemIcon,
        iconSize:Config.TabBarItemIconSize,
        fontColor:Config.TabBarItemFontColor,
        iconColor: Config.TabBarItemIconColor,

        selFontColor:Config.TabBarItemSelFontColor,
        selIconColor: Config.TabBarItemSelIconColor,

        fontSize:Config.TabBarItemFontSize,
        isSel:false,
        componentTag:'TabBarItem'// 固定组件标示, 共tabbar使用
    };

    constructor(props) {

        super(props);
        const {
            bgColor,
            icon,
            iconSize,
            fontColor,
            iconColor,
            selFontColor,
            selIconColor,
            fontSize,

            isSel
            } = this.props;

        this.state = {
            bgColor:bgColor,
            icon:icon,
            iconSize:iconSize,
            fontColor:fontColor,
            iconColor:iconColor,
            selFontColor:selFontColor,
            selIconColor:selIconColor,
            fontSize:fontSize,

            isSel:isSel
        };
    };



    onTouchTap(e) {

        let {
            onTouchTap,
            tag,
            ...props
            } = this.props;
        if (onTouchTap)
            onTouchTap(e,tag);

        e.preventDefault();
    }

    render() {
        var {
            bgColor,
            lable,
            fontSize,
            fontColor,

            iconColor,
            iconSize,
            icon,
            isSel,
            ...props
            } = this.props;



        if(isSel == true) {
            iconColor =this.state.selIconColor;
            fontColor = this.state.selFontColor;
        } else {
            iconColor =this.state.iconColor;
            fontColor = this.state.fontColor;
        }
        var Icon = this.state.icon;

        return (

            <View bgColor = {this.state.bgColor } className="aui-layout-flex-grow-1" onTouchTap={this.onTouchTap.bind(this)}>
                < VLayout  ah ="center" >
                    <Icon size = {this.state.iconSize}  color={iconColor} />
                    <View  fontSize = {this.state.fontSize} fontColor ={fontColor} mb ='3'>  {lable}  </View>
                </VLayout >

            </View>



        );
    }
}
