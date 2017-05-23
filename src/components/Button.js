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


    /*
     * 功能:  初始化
     * 参数:  props
     * 返回:  null
     * 注意:  更新不会调研
     */
    constructor(props) {
        super(props);
        this.componentWillReceiveProps(props)
    };

    /*
     * 功能:  Props 将改变的时候调用
     * 参数:  nextProps
     * 返回:  null
     * 注意:  初始化不会调用
     */
    componentWillReceiveProps(nextProps) {
        const {
            fontSize,
            fontColor,
            bgColor,
            activeColor
            } = this.props;


        this.state = {
            fontSize: fontSize,
            fontColor: fontColor,
            bgTempColor: bgColor,
            bgColor: bgColor,
            activeColor: activeColor,
            h: this.props.h
        };
    }



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

        console.log('ppppppp')
        const {
            fontSize,
            fontColor,
            bgColor,
            activeColor,
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


