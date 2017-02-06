 import React from 'react';


import { NavBar }  from   "../components/NavBar.js"
import { View }  from   "../components/View.js"
import {  VLayout}  from   "../components/VLayout.js"
import {  Container}  from   "../components/Container.js"

import { Checkbox }  from   "../components/Checkbox.js"

import { BaseController }  from   "./common/BaseController.js"
//
export class CheckboxExample extends BaseController {

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

    onTouchTap(e) {
        alert('点击check');
        e.preventDefault();

    }

    render() {

        return (
            <Container >
                <NavBar title="CheckboxExample" onLeftTouchTap={this.onTouchTapBack.bind(this)}>
                </NavBar>
                <VLayout isFill={true} bgColor="#00f">
                    <Checkbox

                        h="30"
                        fontSize="20"
                        fontColor="#F00"
                        label='你好'
                        iconColor="#000"
                        space="30"
                        onTouchTap={this.onTouchTap.bind(this)}>
                    </Checkbox>

                    <Checkbox
                        ml="30"
                        label='你好'
                        space="">
                    </Checkbox>
                </VLayout>

            </Container>

        );
    }
}


