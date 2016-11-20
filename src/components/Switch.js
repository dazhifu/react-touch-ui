import React from 'react';

import assign from 'object-assign'
import classnames from 'classnames';

import { View }  from   "./View.js"

import Config from   "./common/Config.js"
import Utils from   "./common/Utils.js"

import { HLayout }  from   "../components/HLayout.js"
import  './Switch.scss'
export class Switch extends React.Component {


    static propTypes = {
        bgColor: React.PropTypes.string,       // 默认背景颜色
        selBgColor: React.PropTypes.string,      // 选中背景颜色
        borderRadius: React.PropTypes.string,      //  圆角
        circleBgColor: React.PropTypes.string,      // 圆圈颜色
        checked: React.PropTypes.bool,      //选中状态, true false
        onSwitch:React.PropTypes.func,     // 状态改变函数

    };


    static defaultProps = {
        w: Config.SwitchW,
        h: Config.SwitchH,
        bgColor: Config.SwitchBgColor,
        selBgColor: Config.SwitchSelBgColor,
        borderRadius: Config.SwitchBorderRadius,
        circleBgColor: Config.SwitchCircleBgColor,
        checked: false,     // 是否被选中
    };


    constructor(props) {

        super(props);
        const {
            w,h,checked,
            bgColor,
            selBgColor,
            borderRadius,
            circleBgColor,
            } = this.props;

        this.state = {
            w: w,
            h: h,
            checked: checked,
            bgColor: bgColor,
            selBgColor: selBgColor,
            borderRadius: borderRadius,
            circleBgColor: circleBgColor,
        };


    };


    onTouchTap(e) {

        this.setState({checked: !this.state.checked});
        var onSwitch = this.props.onSwitch;
        if (onSwitch) {
            onSwitch(e, this.state.checked);
        }
        e.preventDefault();

    }

    render() {
        const {

            w,h,checked,
            bgColor,
            selBgColor,
            borderRadius,
            circleBgColor,
            ...props
            } = this.props;

        var circleBoxShadow = '0 1px 3px rgba(0, 0, 0, 0.4)';

       var  cw = parseInt(this.state.h) - 2;
       var ch = cw;

        if (this.state.checked == false) {
            var left = 0;
            var bgColorT= this.state.bgColor;
        } else {
            var left = parseInt(this.state.w) - cw - 2;
            var bgColorT= this.state.selBgColor;

        }
        var style = {
            width: this.state.w + "px",
            height: this.state.h + "px",
            position: 'relative',
            border: '1px solid ' + this.state.bgColor,
            backgroundColor: bgColorT,
            boxShadow: this.state.bgColor + ' 0 0 0 0 inset',
            borderRadius: this.state.borderRadius,
            backgroundClip: 'content-box',
            display: 'inline-block'
        };

        var style1 = {
            width: cw + "px",
            height: ch + "px",
            position: 'absolute',
            top: '0px',
            left: left +'PX',
            borderRadius: this.state.borderRadius,
            backgroundColor: this.state.circleBgColor,
            boxShadow: circleBoxShadow
        };


        return (

            <View baseStyle={style} onTouchTap={this.onTouchTap.bind(this)} {...props}>
                <View baseStyle={style1}>

                </View>
            </View>


        );
    }
}


