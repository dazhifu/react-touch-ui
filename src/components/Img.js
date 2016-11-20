import React from 'react';
import assign from 'object-assign'
import classnames from 'classnames';
import { View }  from   "./View.js"
import Utils from   "./common/Utils.js"

import  Config   from   "./common/Config.js"

export class Img extends React.Component {

    static propTypes = {
        src: React.PropTypes.string,       // 图片路径
    };

    static defaultProps = {

    };

    constructor(props) {
       super(props);
    };

    render() {
        const {
            ...props
            } = this.props;

        return (
            <View
                tagName = "img"
                {...props}

            />
        );
    }
}


