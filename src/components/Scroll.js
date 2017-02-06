import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import './Gallery.scss';
import './Layout.scss';
import iScroll from 'iscroll/build/iscroll';

import {View} from './View.js';

import {HLayout} from './HLayout.js';

/**!
 * iScroll React Component
 * iScroll: http://iscrolljs.com/
 * reactjs-iscroll: https://github.com/reactjs-ui/reactjs-iscroll
 *
 */

/**
 * iScroll event name
 beforeScrollStart, executed as soon as user touches the screen but before the scrolling has initiated.
 scrollCancel, scroll initiated but didn't happen.
 scrollStart, the scroll started.
 scroll, the content is scrolling. Available only in scroll-probe.js edition. See onScroll event.
 scrollEnd, content stopped scrolling.
 flick, user flicked left/right.
 zoomStart, user started zooming.
 zoomEnd, zoom ended.
 * @type {*[]}
 */
const iScrollEvents = [
    'beforeScrollStart', 'scrollCancel', 'scrollStart',
    'scroll', 'scrollEnd', 'flick', 'zoomStart', 'zoomEnd'
];

export class Scroll extends React.Component {

    static defaultProps = {
        options: {
            scrollbars: true,
            mouseWheel: true,
            interactiveScrollbars: true,
            shrinkScrollbars: 'scale',
            fadeScrollbars: true,
            scrollX: true,
            scrollY: true,
            disableTouch: false,    // 不加这俩句话   chrome设备上不能滚动
            disablePointer: true
        },
        isHorizontal: false,
        // 是否自动填充剩余空间
        isFill:null,

    };


    static propTypes = {
        options: PropTypes.object.isRequired,
        isHorizontal: PropTypes.object.isRequired,  // 是否水平scroll
        isFill: PropTypes.object.bool  // 是否内容填充
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        this.initIscroll();
        this.bindIScrollEvents();


    }

    componentWillUnmount() {
        this.destoryIScroll()
    }

    initIscroll() {
        // Create new iscroll instance here
        var {options} = this.props;
        const iScrollInstance = new iScroll(ReactDOM.findDOMNode(this), options);
        this.iScrollInstance = iScrollInstance;



    }

    destoryIScroll() {
        if (this.iScrollInstance) {
            this.iScrollInstance.destroy();
            this.iScrollInstance = null;
        }
    }

    getIScroll() {
        return this.iScrollInstance;
    }


    bindIScrollEvents() {
        const iScrollInstance = this.getIScroll();
        const len = iScrollEvents.length;

        for (let i = 0; i < len; i++) {
            const item = iScrollEvents[i];
            let event = this.props[item] ? this.props[item] : this[item];
            if (event) {
                event = event.bind(this);
                iScrollInstance.on(item, (...args) => {
                    event(iScrollInstance, ...args);
                });
            }
        }
    }

    render() {

        let {
            w,h,bgColor,
            children,isFill,
            ...props} = this.props;


       var w1,w2,h1,h2;
        if (this.props.isHorizontal== false) { // 垂直滚动
            w2 = "100%";
            w1 = w ? w : "100%";
            h1 = h;
        } else {
            h2 = "100%";
            h1 = h ? h : "100%";

            w1 = w;
        }

    //console.log("iipppppppppppppppppp",w1,w2,h1,h2);
        return (


            <View w={w1} h={h1} bgColor={bgColor} isFill = {isFill} {...props} baseStyle={ {overflow: "hidden",position:"relative" }}>
                <View  w = {w2}  h = {h2} baseStyle={ {float:"left"}}>
                    {children}
                </View>
            </View>


        );
    }
}

