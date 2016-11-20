import React from 'react'
import assign from 'object-assign'

import Utils from   "./common/Utils.js"
import classnames from 'classnames';
import './Layout.scss';

//const n = (key, x) => {
//
//    if(x ===undefined) return
//    var r, re; // 声明变量。
//    re =  /^\d+$/;
//    r = re.exec(x);
//    if (r) {
//        return {[key]: x+"px"}
//    } else {
//        return {[key]: x}
//    }
//}


export class View extends React.Component {

    constructor(props) {

        //console.log("View->constructor>>>>>>>", props);
        super(props);

    }

    static defaultProps = {
        //  style: {},
        //baseStyle:{}
        isFill: null,
    };

    static propTypes = {
        /** HTML element string or React component to render */
        tagName: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.func,
            React.PropTypes.element
        ]),
        /** Used to pull styles from the rebass context object */
        className: React.PropTypes.string,
        /** Base component styles */
        baseStyle: React.PropTypes.object,
        /** Styles from component instance - overrides base and context styles */
        style: React.PropTypes.object,


        /** Applies margin with the margin utility  */
        m: React.PropTypes.string,
        /** Applies margin top */
        mt: React.PropTypes.string,
        /** Applies margin right */
        mr: React.PropTypes.string,
        /** Applies margin bottom  */
        mb: React.PropTypes.string,
        /** Applies margin left  */
        ml: React.PropTypes.string,


        /** Applies padding with the padding utility */
        p: React.PropTypes.string,
        /** Applies padding top  */
        pt: React.PropTypes.string,
        /** Applies padding right */
        pr: React.PropTypes.string,
        /** Applies padding bottom  */
        pb: React.PropTypes.string,
        /** Applies padding left */
        pl: React.PropTypes.string,

        /** absolute layput   x */
        x: React.PropTypes.string,

        /** absolute y   x */
        y: React.PropTypes.string,
        /*  宽度 */
        w: React.PropTypes.string,
        /*  高度 */
        h: React.PropTypes.string,
        /*  背景颜色 */
        bgColor: React.PropTypes.string,

        /*
         * 自身对其方式   单个项目有与其他项目不一样的对齐方式    相当于 flexBox  align-self
         * start           起点对齐
         * center          中点对齐
         * end             终点对齐
         * baseline        项目的第一行文字的基线对齐
         * stretch         轴线占满整个交叉轴
         */

        as: React.PropTypes.string,
        /*  字体颜色 */
        fontColor: React.PropTypes.string,
        /*  字体大小 */
        fontSize: React.PropTypes.string,
        /*    是否缩放  默认不缩放 */

        flexShrink: React.PropTypes.string,
        /*  左 */
        left: React.PropTypes.string,
        /*  上 */
        top: React.PropTypes.string,
        /*又 */
        right: React.PropTypes.string,
        /*下 */
        bottom: React.PropTypes.string,
        /*border */
        b: React.PropTypes.string,
        /*borderStyle */
        bs: React.PropTypes.string,
        /*borderColor */
        bc: React.PropTypes.string,
        /* borderWidth */
        bw: React.PropTypes.string,
        /*borderRadius */
        br: React.PropTypes.string,


        // 背景图片,不重复,会自动拉伸
        bgImg: React.PropTypes.string,

        // 是否自动填充剩余空间
        isFill: React.PropTypes.bool,
        // 所占比重 1-10
        weight: React.PropTypes.number
    };


    margins(props) {

        const {m,mt,mr,mb,ml} = props || {};
        const result = assign({},
            Utils.kvSize('margin', m),
            Utils.kvSize('marginTop', mt),
            Utils.kvSize('marginBottom', mb),
            Utils.kvSize('marginLeft', ml),
            Utils.kvSize('marginRight', mr)
        );
        return result
    }

    padding(props) {

        const {p,pt,pr,pb,pl} = props || {};

        const result = assign({},
            Utils.kvSize('padding', p),
            Utils.kvSize('paddingTop', pt),
            Utils.kvSize('paddingBottom', pb),
            Utils.kvSize('paddingLeft', pl),
            Utils.kvSize('paddingRight', pr)
        );
        return result
    }

    border(props) {

        const {b, bs,bc,bw, br} = props || {};
        const result = assign({},
            Utils.kvSize('border', b),
            Utils.kvSize('borderStyle', bs),
            Utils.kvSize('borderColor', bc),
            Utils.kvSize('borderWidth', bw),
            Utils.kvSize('borderRadius', br)
        );
        return result
    }

    params(props) {

        const {x,y,w,h,bgColor} = props || {};
        const result = assign({},
            Utils.kvSize('left', x),
            Utils.kvSize('top', y),
            Utils.kvSize('width', w),
            Utils.kvSize('height', h),
            Utils.kvSize('backgroundColor', bgColor)
        );
        return result
    }

    lineHeight(h) {

        if (h) {
            const result = assign({},
                Utils.kvSize("lineHeight", h)
            );
            return result
        }
    }

    render() {
        //  console.log("View->render", this.props)
        var {
            tagName,
            className,
            baseStyle,
            style,
            ...props
            } = this.props;
        //console.log("View->render>>>>>>>",style)


        const Component = tagName || 'div';

        var {
            p, pt, pr, pb, pl,
            m, mt, mr, mb, ml,
            x,y,w,h,bgColor,bgImg,as,
            fontColor, fontSize,
            flexShrink,left,top,right,bottom, isFill,
            b,bs,bc,bw, br,weight,
            ...elementProps
            } = props;

        baseStyle = baseStyle || {};
        style = style || {};

        var styleWeight;
        if (weight) {
            styleWeight = "aui-layout-flex-grow-" + weight;
        }


        var alignSelfContent;
        if (as == "start") {
            alignSelfContent = "aui-layout-align-self-flex-start";
        } else if (as == "center") {
            alignSelfContent = "aui-layout-align-self-center";
        } else if (as == "end") {
            alignSelfContent = "aui-layout-align-self-flex-end";
        } else {
            alignSelfContent = "aui-layout-align-self-" + as;
        }

        if (flexShrink == null) {
            flexShrink = "aui-layout-flex-shrink-0"; // 默认不缩放
        } else {
            flexShrink = null; // 缩放
        }

        var flex;
        if (isFill == true) {
            flex = {
                flex: 1
            }
        }

        // 处理背景图片默认,不允许重复
        var bgimg = null;
        if (bgImg) {
            var wp = Utils.sizeUnit(w);
            var hp = Utils.sizeUnit(h);
            bgimg = assign(
                {backgroundImage: "url(" + bgImg + ")"},
                {backgroundRepeat: 'no-repeat'},
                {backgroundSize: wp + " " + hp}
            )
        }

        const sx = assign(
            {boxSizing: 'border-box'},
            flex,
            {color: fontColor},   // 字体颜色
            {left: left},   //左
            {top: top},   // 上
            {right: right},   // 右
            {bottom: bottom},   // 下
            {fontSize: fontSize},

            baseStyle,
            style,
            bgimg,
            this.border({b, bs, bc, bw, br}),

            this.margins({m, mt, mr, mb, ml}),
            this.padding({p, pt, pr, pb, pl}),
            this.params({x, y, w, h, bgColor}),
            this.lineHeight(h)
        );
        //console.log("View->render>>>>>>>View----",sx)
        return (
            <Component
                {...elementProps}
                className={classnames(className,alignSelfContent,flexShrink,styleWeight,'aui-select-no')}
                style={sx}

            />
        )
    }
}



