import React from 'react';

import assign from 'object-assign'
import classnames from 'classnames';
import Utils from   "./common/Utils.js"
import {View} from   "./View.js"
import {HLayout} from   "./HLayout.js"

import  Config   from   "./common/Config.js"

import IOBack from 'react-icons/lib/io/ios-arrow-back';


export class NavBar extends React.Component {
    static propTypes = {
            title: React.PropTypes.string,                 // title 文字
            titleFontSize: React.PropTypes.string,         // title字体大小
            bgColor: React.PropTypes.string,               // nav bar 背景颜色
            fontColor: React.PropTypes.string,             // 字体颜色
            leftIcon: React.PropTypes.func,                // 左item icon
            leftLabel: React.PropTypes.string,             // 左item 文字
            onLeftTouchTap: React.PropTypes.func,           // 左item  tap 回调函数
            rightIcon: React.PropTypes.func,                //右item icon
            rightLabel: React.PropTypes.string,              // 右item 文字
            onRightTouchTap: React.PropTypes.func,              // 左item  tap 回调函数
            itemFontSize: React.PropTypes.string,            // item字体大小
            iconSize: React.PropTypes.number                // icon 的宽高
    };

    static defaultProps = {
        bgColor: Config.NavBarBgColor,
        fontColor: Config.NavBarFontColor,
        leftIcon: Config.NavBarLeftIcon,
        titleFontSize: Config.NavBarTitleFontSize,
        itemFontSize: Config.NavBarItemFontSize,
        iconSize: Config.NavBarIconSize,
        h:Config.NavBarH
    };

    constructor(props) {
        super(props);

        var {
            bgColor,
            fontColor,
            leftIcon,
            titleFontSize,
            itemFontSize,
            iconSize,
            h,
        } = this.props;

        this.state = {
            bgColor: bgColor,
            fontColor: fontColor,
            leftIcon: leftIcon,
            titleFontSize: titleFontSize,
            itemFontSize: itemFontSize,
            iconSize: iconSize,
            h: h
        };

    };

    //
    renderLeft() {
        const {
            leftIcon,       // 背景颜色
            leftLabel,           // 文字
            itemFontSize,
            fontColor,
            iconSize,
            onLeftTouchTap,
            ...props
            } = this.props;


        var LeftIcon = leftIcon;
        if (LeftIcon) {

            return (

                <HLayout av="center" ah='start' w="18%" onTouchTap={onLeftTouchTap}>
                    <LeftIcon color={this.state.fontColor} className="aui-navbar-active" size={this.state.iconSize}/>
                    <View fontColor={this.state.fontColor} fontSize={this.state.itemFontSize} ml="-7"> {this.state.leftLabel}  </View>
                </HLayout >
            )
        } else {
            return (

                <HLayout av="center" ah='start' w="18%" onTouchTap={onLeftTouchTap}>

                    <View fontColor={this.state.fontColor} fontSize={this.state.itemFontSize} ml="-7"> {this.state.leftLabel}  </View>
                </HLayout >
            )
        }
    }

    //
    renderRight() {
        const {
            rightIcon,       // 背景颜色
            rightLabel,         // 文字
            fontColor,
            itemFontSize,
            onRightTouchTap,
            iconSize,
            ...props
            } = this.props;

        if (rightIcon) {

            var RightIcon = rightIcon;
            return (
                <HLayout av="center" ah='end' w="20%" onTouchTap={onRightTouchTap}>
                    <RightIcon color={this.state.fontColor} size={this.state.iconSize}/>
                </HLayout >

            )
        }
        if (rightLabel) {

            return (
                <HLayout av="center" ah='end' w="18%" onTouchTap={onRightTouchTap}>
                    <View fontColor={this.state.fontColor} fontSize={this.state.itemFontSize}> {this.state.rightLabel}  </View>
                </HLayout >
            )
        }
        return (
            <HLayout w="18%">

            </HLayout >
        );
    }

    render() {
        const {
            title,

            bgColor,
            fontColor,
            leftIcon,
            leftLabel,
            rightIcon,
            rightLabel,
            titleFontSize,
            itemFontSize,
            iconSize,

            ...props
            } = this.props;

        return (

            <HLayout av="center" ah="space-between" h='44' bgColor={this.state.bgColor} pl="5" pr="10"  baseStyle = { { zIndex:"2"} }
                {...props}
            >
                {this.renderLeft()}
                <View fontColor={this.state.fontColor} fontSize={this.state.titleFontSize}> {title} </View>
                {this.renderRight()}
            </HLayout >

        );
    }
}
