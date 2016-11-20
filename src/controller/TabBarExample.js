import React from 'react';

import { BaseController }  from   "./common/BaseController.js"

import { PullList }  from   "../components/PullList.js"
import { NavBar }  from   "../components/NavBar.js"
import { View }  from   "../components/View.js"

import {  Container}  from   "../components/Container.js"
import { TabBar }  from   "../components/TabBar.js"
import { TabBarItem }  from   "../components/TabBarItem.js"
//

export class TabBarExample extends BaseController {

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
        console.log("999999999999999")

    }

    onTouchTapSel(e, tag) {
        // this.props.navigationController.popView()
    }

    render() {
        return (
            <Container >

                <NavBar title="TabBarExample" onLeftTouchTap={this.onTouchTapBack.bind(this)}>
                </NavBar>
                <TabBar onSelIndex={this.onTouchTapSel.bind(this)}  h="60">
                    <View >
                        111111
                    </View>

                    <View  >
                        2222222
                    </View>
                    <View  >
                        3333333
                    </View>
                    <View  >
                        444444
                    </View>
                    <TabBarItem lable="首页"  fontSize = '16'>

                    </TabBarItem  >
                    <TabBarItem lable="活动" >

                    </TabBarItem>
                    <TabBarItem lable="机构" >

                    </TabBarItem>
                    <TabBarItem lable="设置" >

                    </TabBarItem>

                </TabBar>
            </Container>

        );
    }
}


