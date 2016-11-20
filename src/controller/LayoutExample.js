import React from 'react';

import { BaseController }  from   "./common/BaseController.js"
import { NavBar }  from   "../components/NavBar.js"
import { View }  from   "../components/View.js"
import {  VLayout}  from   "../components/VLayout.js"

import {  HLayout}  from   "../components/HLayout.js"


import {  Container}  from   "../components/Container.js"



//
export class LayoutExample extends BaseController {

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
        alert('点击button');
        // this.props.navigationController.popView()

        e.preventDefault();

    }

    render() {

        return (

            <Container >

                <NavBar title="LayoutExample" onLeftTouchTap={this.onTouchTapBack.bind(this)}>
                </NavBar>
                <VLayout isFill={true} bgColor="#00f">
                     水平layout例子
                    <HLayout bgColor="#fff" ah ='center'>
                        水平居中
                        <View   w="50" h="50"   bgColor="#f00">
                            </View>
                        <View   w="50" h="50" bgColor="#0f0">
                        </View>

                        <View   w="80" h="30" bgColor="#0f0" as ='center'>
                             自身居中
                        </View>
                    </HLayout>

                    <HLayout bgColor="#0ff" ah ='end'>
                        水平靠右
                        <View   w="50" h="50"   bgColor="#f00">
                        </View>
                        <View   w="50" h="50" bgColor="#0f0">
                        </View>
                    </HLayout>

                    等分例子
                    <HLayout bgColor="#f0f" ah ='end'>
                        <View   h="50"  weight={1} bgColor="#f00">

                        </View>
                        <View    h="50" weight={1} bgColor="#0f0">
                        </View>
                    </HLayout>

                    自动填充剩余空间
                    <HLayout bgColor="#0ff" ah ='end'>
                        <View w="50"  h="50"   bgColor="#f00">

                        </View>
                        <View    h="50" isFill = {true} bgColor="#0f0">
                             自动填充剩余空间
                        </View>
                    </HLayout>
                    垂直layout例子
                    <VLayout h="80" bgColor="#f00">

                        <View   h="20"   bgColor="#f00">
                        </View>
                        <View    h="50" isFill = {true} bgColor="#0f0">
                            自动填充剩余空间
                        </View>
                    </VLayout>
                    自身居中
                    <VLayout h="100" bgColor="#ff0" ah = 'start'>


                        <View   w= '20' h="20"   bgColor="#f00">
                        </View>
                        <View   w="20" h="20" bgColor="#0f0">
                        </View>


                    </VLayout>

                </VLayout>

            </Container>

        );
    }
}


