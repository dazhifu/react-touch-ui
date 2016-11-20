import React from 'react';


import { NavBar }  from   "../components/NavBar.js"
import { View }  from   "../components/View.js"
import {  VLayout}  from   "../components/VLayout.js"
import {  Container}  from   "../components/Container.js"

import { Button }  from   "../components/Button.js"

import { BaseController }  from   "./common/BaseController.js"


//
export class Test3Example extends BaseController {

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
        console.log("TestExample ----- componentDidMount!");
    }
    /*
     * 功能 :  组件恢复显示通知函数
     * 注意 :  A调到B  B在返回的时候 A会收到此通知
     */
    componentResume () {
        super.componentResume();
        console.log("TestExample ----- componentResume!");
    }
    /*
     * 功能 :  组件暂停显示通知函数
     * 注意 :  A调到B   A会收到此通知
     */
    componentPause () {
        super.componentPause();
        console.log("TestExample ----- componentPause!");
    }
    /*
     * 功能 :  组件被卸载通知函数
     */
    componentWillUnmount () {
        super.componentWillUnmount();
        console.log("TestExample ----- componentWillUnmount!");
    }

    onTouchTapBack(e) {
        this.props.navigationController.popView()
    }
    onTouchTap3(e) {

        this.props.nav.delOfTag('Test1Example');

       // e.preventDefault();

    }
    onTouchTap1(e) {
        // this.props.navigationController.popView()
        //this.props.nav.delOfTag('Test1Example');
        this.props.nav.popOfTag('TestExample');

        e.preventDefault();

    }


    render() {

        console.log("Test3Example ----- render!");
        return (

            <Container >

                <NavBar title="Test3Example" onLeftTouchTap={this.onTouchTapBack.bind(this)}>
                </NavBar>
                <VLayout isFill ={true} bgColor="#00f">


                    <Button    ml="10" mt="10" w="100" h="40" bgColo1r="#ff0" fontColor1="#000" onTouchTap={this.onTouchTapBack.bind(this)}>
                        delOfTag
                    </Button>
                    <Button ml="10" mt="10" w="100" h="40" onTouchTap={this.onTouchTap1.bind(this)} >
                        popOfTag
                    </Button>
                </VLayout>

            </Container>

        );
    }
}


