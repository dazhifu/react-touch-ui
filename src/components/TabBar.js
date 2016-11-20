import React from 'react';

import assign from 'object-assign'
import classnames from 'classnames';
import Utils from   "./common/Utils.js"
import {View} from   "./View.js"
import {HLayout} from   "./HLayout.js"
import {VLayout} from   "./VLayout.js"

import {NavBar} from   "./NavBar.js"
import IOBack from 'react-icons/lib/io/ios-arrow-back';
import {TabBarItem} from   "./TabBarItem.js"

export class TabBar extends React.Component {
    static propTypes = {

        selIndex: React.PropTypes.number,          // 选中索引
        onSelIndex: React.PropTypes.func           // itme被选中事件
    };
    static defaultProps = {

        selIndex: 0
    };

    constructor(props) {
        super(props);
        this.state = {
            selState: [this.props.children.length],
            containers: [],
            tabitems: [],
            selIndex: this.props.selIndex,
        };
        this.state.selState = {false};
        this.state.selState[this.props.selIndex] = true;
        this.state.selIndex = this.props.selIndex;

        var tap = this.onTouchTap.bind(this);


        var childrens = this.props.children.map((o, i)=> {

            if (o.props.componentTag === "TabBarItem") {
                var ii = React.cloneElement(o,
                    {
                        tag: this.state.tabitems.length,

                        onTouchTap: tap,
                        bgColor: this.props.bgColor,
                        isSel: this.state.selState[i]
                    }
                );

                this.state.tabitems.push(ii)
            } else {
                var ii = React.cloneElement(o,
                    {
                        tag: this.state.containers.length,
                    }
                );
                this.state.containers.push(ii)
            }
        });
    };

    onTouchTap(e, tag) {

        this.state.selState = {false};
        this.state.selState[tag] = true;
        this.state.selIndex = tag;
        this.forceUpdate();

        const {
            onSelIndex
            } = this.props;

        if (onSelIndex) {

            onSelIndex(e, tag);
        }
    }

    render() {
        const {
            h,
            bgColor,
            children,
            ...props
            } = this.props;


        var tabitems = this.state.tabitems.map((o, i)=> {
            return React.cloneElement(o,
                {
                    isSel: this.state.selState[i]
                }
            )
        });


        var containers = this.state.containers.map((o, i)=> {
            if (i == this.state.selIndex) {
                return React.cloneElement(o,
                    {
                        hidden: null
                    })
            } else {
                return React.cloneElement(o,
                    {
                        hidden: "hidden"
                    })
            }
        });

        return (

            <VLayout bgColor="#fff" isFill={true}>
                <VLayout bgColor="#fff" isFill={true}>
                    {containers}
                </VLayout>
                <HLayout bgColor={bgColor}  {...props}  >
                    {tabitems}
                </HLayout>

            </VLayout>

        );
    }
}
