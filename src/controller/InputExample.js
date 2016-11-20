import React from 'react';


import { NavBar }  from   "../components/NavBar.js"
import { View }  from   "../components/View.js"
import {  VLayout}  from   "../components/VLayout.js"

import {  HLayout}  from   "../components/HLayout.js"


import {  Container}  from   "../components/Container.js"
import { Button }  from   "../components/Button.js"


import { Input }  from   "../components/Input.js"



import { Textarea }  from   "../components/Textarea.js"

//
import { BaseController }  from   "./common/BaseController.js"
export class InputExample extends BaseController {

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

    onChange(e,v) {
     console.log('oooooooooooo',v);
        // this.props.navigationController.popView()

        e.preventDefault();

    }

    render() {

        return (

            <Container >

                <NavBar title="InputExample" onLeftTouchTap={this.onTouchTapBack.bind(this)}>
                </NavBar>
                <VLayout isFill={true} bgColor="#FFf">


                    <HLayout  >
                        <Input  type="search" mt="20" fontSize="18" ml="10" placeholder='你好'
                                onChange={this.onChange.bind(this)}>

                        </Input>
                    </HLayout>

                    <HLayout >
                        <Textarea mt="20" fontSize="18" ml="10" placeholder='你好'
                                onChange={this.onChange.bind(this)}>

                        </Textarea>
                    </HLayout>

                </VLayout>

            </Container>

        );
    }
}


