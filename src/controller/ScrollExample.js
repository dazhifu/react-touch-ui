import React from 'react';

import { BaseController }  from   "./common/BaseController.js"
import { NavBar }  from   "../components/NavBar.js"
import { View }  from   "../components/View.js"
import {  VLayout}  from   "../components/VLayout.js"
import {  Container}  from   "../components/Container.js"


import { Scroll }  from   "../components/Scroll.js"
import { List }  from   "../components/List.js"
import { ListItem }  from   "../components/ListItem.js"
//
export class ScrollExample extends BaseController{

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


    render() {
        return (
            <Container >
                <NavBar title="ScrollExamole" onLeftTouchTap={this.onTouchTapBack.bind(this)}>
                </NavBar>
                <VLayout  isFill={true} >
                    <Scroll h="300" w="300" bgColor="#Ff0" isHorizontal={true}>
                        <View  h ="100%" w="400"bgColor="#F0f">
                        </View>
                    </Scroll>

                    <Scroll h="300" w='100%' bgColor="#Ff0" >
                        <View  h ="400" w="100%" bgColor="#00f">
                        </View>
                    </Scroll>
                </VLayout>

                <NavBar title="TabBar">
                </NavBar>
            </Container>

        );
    }

    //render() {
    //
    //
    //    return (
    //
    //        <Container >
    //
    //            <NavBar title="TabBar" onTouchTap={this.onTouchTapBack.bind(this)}>
    //            </NavBar>
    //    <View bgColor="#0f0" >
    //        </View>
    //            <NavBar title="TabBar">
    //            </NavBar>
    //        </Container>
    //
    //    );
    //}
}


