import React from 'react';

import assign from 'object-assign'
import classnames from 'classnames';

import { View }  from   "./View.js"
import Utils from   "./common/Utils.js"

import  './List.scss'


export class List extends React.Component {

    constructor(props) {
        super(props);
    };

    render() {
        const {

            children,
            ...props,
            } = this.props;

        return (
            <View
                {...props}
            >
                <ul
                    {...assign(
                        {children: children}
                    )}
                    className={classnames("aui-list")}
                >

                </ul>
            </View>


        );
    }
}


