import React from 'react';

import assign from 'object-assign'
import classnames from 'classnames';

import { View }  from   "./View.js"
import Utils from   "./common/Utils.js"

import  './Badge.scss'
import  Config   from   "./common/Config.js"


export class Badge extends React.Component {

    static propTypes = {
        fontSize: React.PropTypes.string,       // 字体大小
        fontColor: React.PropTypes.string,      // 字体颜色
        bgColor: React.PropTypes.string,          // 背景颜色
        h: React.PropTypes.string              // 高度
    };

    static defaultProps = {
        fontSize: Config.BadgeFontSize,
        fontColor: Config.BadgeFontColor,
        bgColor: Config.BadgeBgColor,
        h: Config.BadgeH
    };


    constructor(props) {
        super(props);
        const {
            fontSize,
            fontColor,
            bgColor,
            h
            } = this.props;
        this.state = {
            fontSize: fontSize,
            fontColor: fontColor,
            bgColor: bgColor,
            h: h
        };
    };

    render() {
        const {
            fontSize,    // 字体大小
            fontColor,   // 字体颜色
            bgColor,    // 背景颜色
            h,          // 高度
            ...props
            } = this.props;

        var hStyle;
        hStyle = assign(
            Utils.kvSize('paddingTop', 0),
            Utils.kvSize('paddingBottom', 0)
        );

        return (
            <View
                className={classnames("aui-badge")}
                fontColor={this.state.fontColor}
                bgColor={this.state.bgColor}
                h={this.state.h}
                fontSize={this.state.fontSize}
                baseStyle={hStyle}
                {...props}

            />
        );
    }
}


