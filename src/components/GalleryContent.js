import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

import './Layout.scss';
import {View} from './View.js';




export class GalleryContent extends React.Component {

    static defaultProps = {};

    static propTypes = {};

    constructor(props) {
        super(props);
    }

    render() {
        var {

            ...props
            } = this.props;

        return (

            <View className="aui-layout-flex-grow-1" h="100%" 			{...props} >

            </View>



        );
    }
}

