import React from 'react';
import assign from 'object-assign'
import classnames from 'classnames';
import { View }  from   "./View.js"
import Utils from   "./common/Utils.js"

import  Config   from   "./common/Config.js"

import  './Button.scss'
//PPPPPPPll
export class Button extends React.Component {

    static propTypes = {
        fontSize: React.PropTypes.string,       // 字体大小
        fontColor: React.PropTypes.string,      // 字体颜色
        bgColor: React.PropTypes.string,          // 背景颜色
        activeColor: React.PropTypes.string      // 点击后颜色
    };
    static defaultProps = {
        fontSize: Config.ButtonFontSize,
        fontColor: Config.ButtonFontColor,
        bgColor: Config.ButtonBgColor,
        activeColor: Config.ButtonActiveColor,
        h:Config.ButtonHeight
    };

    constructor(props) {
       super(props);
        const {
            fontSize,
            fontColor,
            bgColor,
            activeColor,
            h
            } = this.props;
        this.state = {
            fontSize: fontSize,
            fontColor: fontColor,
            bgTempColor: bgColor,
            bgColor: bgColor,
            activeColor: activeColor,
            h: h
        };
    };


    handleTouchStart(e) {

        this.state.bgTempColor = this.state.activeColor;
        this.forceUpdate();
        e.preventDefault();
    }

    handleTouchCancel(e) {

        this.state.bgTempColor = this.state.bgColor;
        this.forceUpdate();
        e.preventDefault();
    }

    handleTouchEnd(e) {
        this.state.bgTempColor = this.state.bgColor;
       this.forceUpdate();
        e.preventDefault();
    }

    render() {
        const {
            fontSize,    // 字体大小
            fontColor,   // 字体颜色
            bgColor,
            ...props
            } = this.props;

        return (
            <View
                className={classnames("aui-button")}

                fontSize={this.state.fontSize}
                fontColor={this.state.fontColor}
                bgColor={this.state.bgTempColor}
                onTouchStart={this.handleTouchStart.bind(this)}
                onTouchCancel={this.handleTouchCancel.bind(this)}
                onTouchEnd={this.handleTouchEnd.bind(this)}
                {...props}

            />
        );
    }
}


