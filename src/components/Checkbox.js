import React from 'react';

import assign from 'object-assign'
import classnames from 'classnames';

import { View }  from   "./View.js"

import Config from   "./common/Config.js"
import Utils from   "./common/Utils.js"


import IOCheck from 'react-icons/lib/io/ios-checkmark-outline';
import IOChecked from 'react-icons/lib/io/ios-checkmark';
import { HLayout }  from   "../components/HLayout.js"

export class Checkbox extends React.Component {



    static propTypes = {
        fontSize: React.PropTypes.string,       // 字体大小
        fontColor: React.PropTypes.string,      // 字体颜色
        iconColor: React.PropTypes.string,      // 背景颜色
        label: React.PropTypes.string,          // 点击后颜色
        space:React.PropTypes.string,           // 间隔
        checked:React.PropTypes.bool,           // 是否被选中
        onTouchTap:React.PropTypes.func         // touch事件

    };

    static defaultProps = {
        fontSize: Config.CheckboxFontSize,       // 字体大小
        fontColor: Config.CheckboxFontColor,      // 字体颜色
        iconColor:Config.CheckboxIconColor,       // 颜色
        label: '',      // 点击后颜色
        space:'',      // 间隔
        h:Config.CheckboxHeight,
        checked:false,     // 是否被选中
    };


    constructor(props) {

        super(props);
        const {
            fontSize,
            fontColor,
            iconColor,
            label,
            space,
            checked,
            h
            } = this.props;

        this.state = {
            fontSize: fontSize,
            fontColor: fontColor,
            iconColor: iconColor,
            label: label,
            space: space,
            h: h,
            checked :checked
        };


    };


    /*
     * 功能:  组件点击事件
     * 参数:  null
     * 返回:  null
     */

    onTouchTap(e) {
        this.setState({checked: !this.state.checked});
        var onTouchTap = this.props.onTouchTap;
        if (onTouchTap) {
            onTouchTap(e);
        }
        e.preventDefault();
    }

    render() {
        const {
            h,
            fontSize,
            fontColor,
            iconColor,       // 背景颜色
            label,           // 文字
            space,           // 图片文字间隔
            ...props
            } = this.props;

        var IOCheckIcon;
        if (this.state.checked == false) {
            IOCheckIcon = IOCheck
        } else {
            IOCheckIcon = IOChecked
        }


        return (

            <HLayout flexDirection="row" justifyContent="flex-start"  {...props} onTouchTap={this.onTouchTap.bind(this)}>
                <IOCheckIcon color={this.state.iconColor} size={Utils.sizeUnit(this.state.h)}/>
                <View ml={this.state.space} h={this.state.h} fontSize = {this.state.fontSize} fontColor={this.state.fontColor}> {this.state.label}  </View>
            </HLayout >




        );
    }
}


