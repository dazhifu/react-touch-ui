import React from 'react';


import { NavBar }  from   "../components/NavBar.js"
import { View }  from   "../components/View.js"
import {  VLayout}  from   "../components/VLayout.js"
import {  Container}  from   "../components/Container.js"

import { Button }  from   "../components/Button.js"


import { BaseController }  from   "./common/BaseController.js"
//
export class ButtonExample extends BaseController {

    /*
     * 功能 : 构造函数 可以定义state变量
     */
    constructor(props) {
        super(props);
        this.state = {
            bgColor: '#F00'
        };

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
       //alert('点击button');
        // this.props.navigationController.popView();
        console.log('777777')
        this.setState({ bgColor: '#0F0'})

        e.preventDefault();

    }

    componentWillUnmount () {
        console.log("ButtonExample ----- componentWillUnmount!");
    }

    render() {

        console.log("ButtonExample ----- render!",this.state.bgColor);
        return (
            <Container >
                <NavBar title="ButtonExample" onLeftTouchTap={this.onTouchTapBack.bind(this)}>
                </NavBar>
                <VLayout isFill ={true} bgColor="#00f">
                    <Button    ml="10" mt="10" w="100" h="40" bgColo1r={this.state.bgColor} fontColor="#000" onTouchTap={this.onTouchTap.bind(this)}>
                        确定
                    </Button>
                    <Button ml="10" mt="10" w="100" h="40">
                        返回
                    </Button>
                </VLayout>

            </Container>

        );
    }
}


