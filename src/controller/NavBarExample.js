import React from 'react';
import { BaseController }  from   "./common/BaseController.js"
import { Container }  from   "../components/Container.js"

import { VLayout }  from   "../components/VLayout.js"


import { NavBar }  from   "../components/NavBar.js"

import { ALayout }  from   "../components/ALayout.js"
import { View }  from   "../components/View.js"


import { Img }  from   "../components/Img.js"

import IOBack from 'react-icons/lib/io/android-person';
export class NavBarExample extends BaseController {

    /*
     * 功能 : 构造函数 可以定义state变量
     */
    constructor(props) {
        super(props);

        console.log('00000', this.props.tag)

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

        var jj = IOBack;
        return (

            <Container >
                <NavBar title="AUI" onLeftTouchTap={this.onTouchTapBack.bind(this)}>
                </NavBar>
                <VLayout isFill={true} mt="20">
                    <NavBar
                        title="首页"
                        leftLabel=""
                        rightLabel="提交"
                        rightIcon={IOBack}
                        iconSize={30}
                        onLeftTouchTap={this.onLeftTouchTap.bind(this)}
                        onRightTouchTap={this.onRightTouchTap.bind(this)}
                    >


                    </NavBar>


                    <NavBar
                        mt="20"
                        title="首页"
                        leftLabel="返回"
                        rightLabel="提交"
                        rightIcon={IOBack}
                        iconSize={30}
                        bgColor="#0f0"
                        fontColor="#000"
                        onLeftTouchTap={this.onLeftTouchTap.bind(this)}
                        onRightTouchTap={this.onRightTouchTap.bind(this)}

                    >
                    </NavBar>
                </VLayout>

            </Container>

        )
    }
}


