import React from 'react';

import assign from 'object-assign'
import classnames from 'classnames';

import { View }  from   "./View.js"

import Config from   "./common/Config.js"
import Utils from   "./common/Utils.js"


import { HLayout }  from   "../components/HLayout.js"

export class Radio extends React.Component {

    static propTypes = {
        fontSize: React.PropTypes.string,       // 字体大小
        fontColor: React.PropTypes.string,      // 字体颜色
        iconColor: React.PropTypes.string,      // 背景颜色
        iconedColor: React.PropTypes.string,    // 选中背景颜色
        label: React.PropTypes.string,          // 点击后颜色
        space:React.PropTypes.string,           // 间隔
        checked:React.PropTypes.bool,           // 是否被选中
        icon:React.PropTypes.func,             // icon图片
        iconed:React.PropTypes.func             // icon 选中图片
    };

    static defaultProps = {
        fontSize: Config.RadioFontSize,       // 字体大小
        fontColor: Config.RadioFontColor,      // 字体颜色
        iconColor:Config.RadioIconColor,       // 颜色
        iconedColor:Config.RadioIconedColor,       // 颜色
        label: '',      // 点击后颜色
        space:'',      // 间隔
        h:Config.RadioHeight,
        checked:false,     // 是否被选中
        icon:Config.RadioIcon,
        iconed:Config.RadioIconed
    };


    constructor(props) {

        super(props);
        const {
            fontSize,
            fontColor,
            iconColor,
            iconedColor,
            icon,
            iconed,
            label,
            space,
            checked,
            h
            } = this.props;

        this.state = {
            fontSize: fontSize,
            fontColor: fontColor,
            iconColor: iconColor,
            iconedColor:iconedColor,
            label: label,
            space: space,
            icon: icon,
            iconed: iconed,
            h: h,
            checked :checked
        };
    };


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


        var IOCheckIcon = this.state.icon;
        var iconColorTemp = this.state.iconColor;
        if (this.state.checked == true) {

            IOCheckIcon = this.state.iconed;
            iconColorTemp = this.state.iconedColor;
        }

        return (

            <HLayout flexDirection="row" justifyContent="flex-start"  {...props} onTouchTap={this.onTouchTap.bind(this)}>
                <IOCheckIcon color={iconColorTemp} size={Utils.sizeUnit(this.state.h)}/>
                <View ml={this.state.space} h={this.state.h} fontSize = {this.state.fontSize} fontColor={this.state.fontColor}> {this.state.label}  </View>
            </HLayout >




        );
    }
}


