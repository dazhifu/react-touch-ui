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

export class Gallery extends React.Component {

    static defaultProps = {
        options: {
            scrollX: true,
            scrollY: false,
            momentum: false,
            disableMouse: true,
            disablePointer: true,
            snap: true,
            snapSpeed: 400,
            keyBindings: true,
            preventDefault: false,  // 不拦截事件
            indicators: {
                el: null,
                resize: false
            }
        }

    };


    static propTypes = {
        options: PropTypes.object.isRequired
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

    /*
     * 功能:  初始化Iscroll
     * 参数:  null
     * 返回:  null
     */
    initIscroll() {
        // Create new iscroll instance here
        var {options} = this.props;
        options.indicators.el = ReactDOM.findDOMNode(this).children[1];
        const iScrollInstance = new iScroll(ReactDOM.findDOMNode(this).children[0], options);
        this.iScrollInstance = iScrollInstance;

        var indicators = options.indicators.el;
        var num = this.props.children.length;

        for (var i = 0; i < num; i++) {
            var dotStyle = indicators.children[i + 1].style;
            dotStyle.left = -Math.round(iScrollInstance.indicators[0].sizeRatioX * (iScrollInstance.wrapperWidth * i)) + "px";
        }

    }

    /*
     * 功能: 销毁Iscroll
     * 参数:  null
     * 返回:  null
     */
    destoryIScroll() {
        if (this.iScrollInstance) {
            this.iScrollInstance.destroy();
            this.iScrollInstance = null;
        }
    }

    /*
     * 功能:  得到Iscroll 实例
     * 参数:  null
     * 返回:  null
     */
    getIScroll() {
        return this.iScrollInstance;
    }

    /*
     * 功能:  绑定Iscroll 事件
     * 参数:  null
     * 返回:  null
     */
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

        let { h,

            children,
            ...props} = this.props;


        var num = this.props.children.length;

        var dotty = [];
        for (var i = 0; i < num; i++) {
            dotty[i] =  <View id="dottybg">   </View>;
        }

        return (
            <View w1="100%" h={h} style={ {overflow: "hidden",position:"relative"} } {...props}>
                <View w="100%" h={h}>
                    <HLayout w={(num+"00%")} h="100%"  >
                        {children}
                    </HLayout>
                </View>
                <View id="indicator" w={num*20+""}>
                    <div id="dotty"></div>
                    {dotty}
                </View>
            </View>


        );
    }
}

