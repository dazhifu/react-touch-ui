import React from 'react';
import { View }  from   "./View.js"


import classnames from 'classnames';
/*
 绝对布局layout 里面的子view都是绝对布局
 */
export class ALayout extends View {


    static propTypes = {};

    constructor(props) {
        super(props);
    };


    render() {
        var {
            children,
            ...props
            } = this.props;

        var childrens = children.map((o, i)=> {
            var ii = React.cloneElement(o,
                {
                    baseStyle: {position: 'absolute'}
                }
            );
            return ii;
        });
        return (
            <View    {...props} >
                <View baseStyle={{position:'relative'}} w="100%" h="100%">
                    {childrens}
                </View>


            </View>
        );
    }
}


