import React from 'react';
import { View }  from   "./View.js"
import  './Layout.scss'

import classnames from 'classnames';

export class HLayout extends View {


    static propTypes = {
        /*
         * 如果一条轴线排不下，如何换行
         *   wrap        换行，第一行在上方
         * nowrap        不换行
         * wrap-reverse  换行，第一行在下方
         *
         */

        flexWrap: React.PropTypes.string,

        /*
         * 水平对其         相当于 Flex 布局的 justify-content
         * start           起点对齐
         * center          中点对齐
         * end             终点对齐
         * space-between   间隔平均分布
         * space-around    每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍
         * stretch         轴线占满整个交叉轴
         */

        ah: React.PropTypes.string,
        /*
         * 垂直对其         相当于 Flex 布局的  align-items
         * start           起点对齐
         * center          中点对齐
         * end             终点对齐
         * space-between   间隔平均分布
         * space-around    每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍
         * stretch         轴线占满整个交叉轴
         */
        av: React.PropTypes.string,

        /*
         * 自身对其方式      单个项目有与其他项目不一样的对齐方式    相当于 Flex 布局的  align-self
         * start           起点对齐
         * center          中点对齐
         * end             终点对齐
         * baseline        项目的第一行文字的基线对齐
         * stretch         轴线占满整个交叉轴
         */
        as: React.PropTypes.string
    };



    constructor(props) {
        super(props);

    }
    ;

    render() {

        var {
            flexWrap,
            ah,
            av,
            as,
            className,
            ...props
            } = this.props;

        var alignjustify;
        if (ah == "start") {
            alignjustify = "aui-layout-justify-content-flex-start";
        } else if (ah == "center") {
            alignjustify = "aui-layout-justify-content-center";
        } else if (ah == "end") {
            alignjustify = "aui-layout-justify-content-flex-end";
        } else {
            alignjustify = "aui-layout-justify-content-" + ah;
        }


        var alignItemsContent;
        if (av == "start") {
            alignItemsContent = "aui-layout-align-items-flex-start";
        } else if (av == "center") {
            alignItemsContent = "aui-layout-align-items-center";
        } else if (av == "end") {
            alignItemsContent = "aui-layout-align-items-flex-end";
        } else {
            alignItemsContent = "aui-layout-align-items-" + av;
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


        var classname = classnames(className, "aui-layout-flexbox", "aui-layout-row", "aui-layout-" + flexWrap, alignjustify, alignItemsContent, alignSelfContent);
        //console.log("Layout->render",classname,argType)
        return (
            <View
                className={classname}
                //				className={ super.classNames("flexbox","column")}
                {...props}


            />
        );
    }
}


