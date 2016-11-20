import React from 'react';
import { Container }  from   "../components/Container.js"

import { VLayout }  from   "../components/VLayout.js"

import { ALayout }  from   "../components/ALayout.js"
import { View }  from   "../components/View.js"

import { NavBar }  from   "../components/NavBar.js"

import { BaseController }  from   "./common/BaseController.js"
export class ALayoutExample extends BaseController {

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
        this.props.navigationController.popView();
        e.preventDefault();

    }

    onLeftTouchTap(e) {
        console.log("onLeftTouchTap")

    }

    onRightTouchTap(e) {
        console.log("onRightTouchTap")
    }

    render() {


        return (

            <Container >

                <NavBar title="AUI" onLeftTouchTap={this.onTouchTapBack.bind(this)}>
                </NavBar>
                <VLayout  isFill={true} mt="20">


                    <ALayout  w="200" h="200" bgColor="#f0F">

                        <View w="100" h ='100'  bgColor="#f00">
                        </View>
                        <View bottom="100" w1="30" right1="0"  left="10" bgColor="#ff0">
                        fgfggh
                        </View>
                    </ALayout>

                </VLayout>
                


            </Container>

        )
    }
}


