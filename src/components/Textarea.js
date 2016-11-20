import React from 'react';

import assign from 'object-assign'
import classnames from 'classnames';

import { View }  from   "./View.js"
import Utils from   "./common/Utils.js"
import  './Textarea.scss'
import  Config   from   "./common/Config.js"

import IOSearch from 'react-icons/lib/io/ios-search';
import { Layout }  from   "../components/Layout.js"

export class Textarea extends React.Component {
    static propTypes = {
        fontSize: React.PropTypes.string,       // 字体大小
        fontColor: React.PropTypes.string,      // 字体颜色
        type: React.PropTypes.string,            // 类型 默认是编辑,search  搜索
        placeholder: React.PropTypes.string,      // 提示文字
        value: React.PropTypes.string,           // 默认文字
        maxLength: React.PropTypes.string,      //  最大长度
        onChange: React.PropTypes.string,          // onchange 方法
    };

    static defaultProps = {
        fontSize: Config.TextareaFontSize,
        fontColor: Config.TextareaFontColor,
        h: Config.TextareaH
    };

    constructor(props) {
        super(props);

        const {
            fontSize,
            fontColor,
            h, value,
            maxLength,
            } = this.props;

        this.state = {
            fontSize: fontSize,
            fontColor: fontColor,
            h: h,
            value: value,
            maxLength: maxLength
        };
    };

    handle(e) {

        var value = e.target.value;
        this.setState({value: value});
        this.state.onChange(e,value)

    };

    renderCommon(inputStyle,type,placeholder,props) {

        return (
            <View className="aui-textarea-outline"
                {...props}
            >
                <textarea style={inputStyle} type={type} className="aui-textarea" placeholder={placeholder} maxLength={this.state.maxLength }
                       value={this.state.value}   onChange={this.handle.bind(this)}  data-input-clear="1" data-input-search="1">
                </textarea>

            </View>
        );
    }


    render() {
        const {
            fontSize,        // 字体大小
            fontColor,       // 字体颜色
            onChange,
            type,
            placeholder,     // 提示字
            ...props
            } = this.props;

        this.state.onChange = onChange;


        var hStyle;


        const inputStyle = assign(
            //   {-webkit-appearance:none},

            {color: this.state.fontColor},
            Utils.kvSize('fontSize', this.state.fontSize)

        );

        return this.renderCommon(inputStyle,type,placeholder,props);

    }
}


