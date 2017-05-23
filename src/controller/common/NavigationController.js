import React from 'react';
import ReactDOM from 'react-dom';
import { VLayout }  from   "../../components/VLayout.js"
import { View }  from   "../../components/View.js"


import  './NavigationController.scss'
import Move from 'move-js';
//
export class NavigationController extends React.Component {

    constructor(props) {
        super(props);
        const { rootView } = this.props;

        this.state = {
            rootDom: null,  //根dom
            ctrlInsts: [],   // {{ctrl:newCtrl, tag:tag}}

            block: false,
        }
    }

    genBaseController(ctrl) {
        console.log('uuuuuuuuuuuuuuuu6666666',ctrl)
        var newCtrl = React.cloneElement(ctrl, {
            navigationController: this,
            nav: this
        });

        const div = document.createElement("div");
        div.className = 'aui-ReactNavigationControllerViewContent';
        this.state.rootDom.appendChild(div);
        ReactDOM.render(newCtrl, div)
        console.log('uuuuuuuuuuuuuuuu',newCtrl)

    }

    handleBackButton() {
        if (this.state.rootDom.childNodes.length < 2) {
            // 弹退出提示
            navigator.notification.confirm("退出应用程序？",
                function (button) {
                    if (button == 1) {
                        navigator.app.exitApp();
                    }
                }, "关闭", "确定,取消");


        } else {
            this.pop();
        }
        e.preventDefault();

    }

    componentWillMount() {
    }

    componentDidMount() {
        this.state.rootDom = ReactDOM.findDOMNode(this.refs['rootview']);

        // 判断cordova存不存在
        if (window.orientation != undefined) {
            document.addEventListener("backbutton", this.handleBackButton.bind(this), false);
        }


    }

    push(view) {
        this.pushView(view);
    }

    pushView(view) {

        if (this.state.block == true) {
            console.log("NavigationController ----- translateing!");
            return;
        }
        this.genBaseController(view); //
        var self = this;

        var preview = this.state.rootDom.childNodes[this.state.rootDom.childNodes.length - 2];
        var nextview = this.state.rootDom.childNodes[this.state.rootDom.childNodes.length - 1];

        this.state.block = true;
        var translateX = '-200%';
        if (preview.style.left == '0px') {  // 说是跟节点
            translateX = '-100%'
        }

        // 加延时保证做动画前 react render  渲染完
        setTimeout(function () {
                Move(preview)
                    .ease('in').x(translateX)
                    .duration(300)
                    .end(function () {
                        // 不可见
                        if (self.state.ctrlInsts[self.state.ctrlInsts.length - 2] && self.state.ctrlInsts[self.state.ctrlInsts.length - 2].componentPause) {
                            self.state.ctrlInsts[self.state.ctrlInsts.length - 2].componentPause();
                        }

                        preview.style.display = 'none';

                        self.state.block = false;

                    });
                Move(nextview)
                    .ease('in').x('-100%')
                    .duration(150)
                    .end(function () {

                    });
            },
            50)


    }

    pop() {
        this.popView()
    }

    popView() {

        if (this.state.block == true) {
            console.log("NavigationController ----- translateing!");
            return;
        }

        if (this.state.rootDom.childNodes.length < 2) return;
        var self = this;
        this.state.block = true;
        var preview = this.state.rootDom.childNodes[this.state.rootDom.childNodes.length - 2];
        // preview.style.left='-100%';
        var nextview = this.state.rootDom.childNodes[this.state.rootDom.childNodes.length - 1];
        //nextview.style.left=0;

        var translateX = '-100%';
        if (preview.style.left == '0px') {  // 说是跟节点
            translateX = '0'
        }
        preview.style.display = 'block';

        // 加延时保证做动画前 react render  渲染完 , 避免display translate 冲突
        setTimeout(function () {
                Move(preview)
                    .ease('in').x(translateX)
                    .duration(150)
                    .end(function () {
                    });
                Move(nextview)
                    .ease('in').x(0)
                    .duration(150)
                    .end(function () {
                        // 移除组件,removeChild 只能删除dom无法删除rect组件
                        //ReactDOM.unmountComponentAtNode(seft.state.ctrlsDom[seft.state.ctrlsDom.length-1]);
                        ReactDOM.unmountComponentAtNode(self.state.rootDom.lastChild);
                        self.state.rootDom.removeChild(self.state.rootDom.lastChild);
                        if (self.state.ctrlInsts[self.state.ctrlInsts.length - 2] && self.state.ctrlInsts[self.state.ctrlInsts.length - 2].componentResume) {
                            self.state.ctrlInsts[self.state.ctrlInsts.length - 2].componentResume();
                        }

                        self.state.ctrlInsts.pop();
                        self.state.block = false;
                    });
            },
            50);
        requestAnimationFrame(function () {

        });


    }

    // 删除tag 以上 不包含tag
    popOfTag(tag) {

        if (this.state.ctrlInsts.length < 2) return;  // 一个不做处理
        var flag = false;
        var i = this.state.ctrlInsts.length;
        while (i--) {
            var node = this.state.ctrlInsts[i];
            if (node.props.tag == tag) {
                flag = true;
                break;
            }
        }

        if (flag == false) return; // 找不到对应的tag不删

        var i = this.state.ctrlInsts.length;
        i--; // 第一个先不删
        var top = this.state.ctrlInsts[i];
        while (i--) {

            var node = this.state.ctrlInsts[i];
            if (node.props.tag == tag)  break;
            this.state.ctrlInsts.splice(i, 1);
            this.state.rootDom.removeChild(ReactDOM.findDOMNode(node).parentNode);
            ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(node).parentNode);

        }

        top.props.nav.pop();

    }

    addViewInst(inst) {

        this.state.ctrlInsts.push(inst);

    }

    // 从0开始 只删除第一次遇到的
    delOfTag(tag) {
        if (this.state.ctrlInsts.length < 2) return;  // 一个不做处理
        var i = this.state.ctrlInsts.length;
        while (i--) {
            var node = this.state.ctrlInsts[i];
            if (node.props.tag == tag) {
                this.state.ctrlInsts.splice(i, 1);
                this.state.rootDom.removeChild(ReactDOM.findDOMNode(node).parentNode);
                ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(node).parentNode);
            }
        }
    }

    /// 隐藏不显示div
    render() {
        console.log("NavigationController ----- render!");
        var style = {
            position: 'absolute',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
            width: '100%',
            height: '100%',
            backgroundColor: "#fff",
        };
        const { rootView } = this.props;

        var newCtrl = React.cloneElement(rootView, {
            navigationController: this,
            nav: this,

        });

        return (

            <VLayout baseStyle={style} ref='rootview'>
                <VLayout style={style}>
                    {newCtrl}
                </VLayout>
            </VLayout>

        );
    }
}


