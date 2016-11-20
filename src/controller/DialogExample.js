import React from 'react';


import { NavBar }  from   "../components/NavBar.js"
import { View }  from   "../components/View.js"
import {  VLayout}  from   "../components/VLayout.js"

import {  HLayout}  from   "../components/HLayout.js"


import {  Container}  from   "../components/Container.js"
import { Button }  from   "../components/Button.js"


import { Switch }  from   "../components/Switch.js"

import { showTost,showLoading ,stopLoading}  from   "../components/Toast.js"
import {showDialogConfirm,showDialogWarning } from   "../components/Dialog.js"

import { BaseController }  from   "./common/BaseController.js"
//
export class DialogExample extends BaseController{

    /*
     * 功能 : 构造函数 可以定义state变量
     */
    constructor(props) {
        super(props);

    }
    /*
     * 功能 : 组件渲染完成通知函数
     * 注意 : 一定要调用super.componentDidMount();  或者把这个通知去掉
     */
    componentDidMount() {
        super.componentDidMount();
    }
    /*
     * 功能 :  组件恢复显示通知函数
     * 注意 :  A调到B  B在返回的时候 A会收到此通知
     */
    componentResume () {
        super.componentResume();
    }
    /*
     * 功能 :  组件暂停显示通知函数
     * 注意 :  A调到B   A会收到此通知
     */
    componentPause () {
        super.componentPause();
    }
    /*
     * 功能 :  组件被卸载通知函数
     */
    componentWillUnmount () {
        super.componentWillUnmount();
    }

    onTouchTapBack(e) {
        this.props.navigationController.popView()
    }


    onLeftTouch(e) {
        console.log('onLeftTouch');
        //alert('eeeeee')
    }

    onRightTouch(e) {
        console.log('onRightTouch');
        // alert('KKKKKKK')
    }

    onOkTouch(e) {
        console.log('onOkTouch');
        // alert('KKKKKKK')
    }

    onShowDialogConfirm(e) {

        showDialogConfirm('测试','弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内', '取消','确定',this.onLeftTouch.bind(this),this.onRightTouch.bind(this));

    }

    onShowDialogWarning(e) {

        showDialogWarning('弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内', '知道了', this.onOkTouch.bind(this))

    }
    onShowTost(e) {

        showTost('联网错误');

    }

    onShowLoading(e) {


        showLoading('联网错误');

        setTimeout(function () {
            stopLoading();
        }, 2000);
    }

    render() {


        return (

            <Container >

                <NavBar title="SwitchExample" onLeftTouchTap={this.onTouchTapBack.bind(this)}>
                </NavBar>
                <VLayout isFill={true}>


                    <Button mt='10' ml='100' mr="100" onTouchTap={this.onShowDialogConfirm.bind(this)}>
                        showDialogConfirm
                    </Button>


                    <Button mt='10' ml='100' mr="100" onTouchTap={this.onShowDialogWarning.bind(this)}>
                        showDialogWarning
                    </Button>

                    <Button mt='10' ml='100' mr="100" onTouchTap={this.onShowTost.bind(this)}>
                        showTost
                    </Button>
                    <Button mt='10' ml='100' mr="100" onTouchTap={this.onShowLoading.bind(this)}>
                        showLoading
                    </Button>

                </VLayout>

            </Container>

        );
    }
}


