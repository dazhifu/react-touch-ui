import React from 'react';


import { NavBar }  from   "../components/NavBar.js"
import { View }  from   "../components/View.js"
import {  VLayout}  from   "../components/VLayout.js"

import {  HLayout}  from   "../components/HLayout.js"
import {  Container}  from   "../components/Container.js"
import { ButtonGroup }  from   "../components/ButtonGroup.js"

import { BaseController }  from   "./common/BaseController.js"
//
export class ButtonGroupExample extends BaseController{

    /*
     * 功能 : 构造函数 可以定义state变量
     */
    constructor(props) {
        super(props);
        this.state = {
            color : '#f00'

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

    onSwich(e,index) {
        console.log('点击buttongroup', index, this);

        if(index == 1) {

            this.setState ({
                color : '#ff0'

            });
        } else if  (index ==2) {

            this.setState ({
                color : '#0f0'

            });
        }else if  (index ==3) {

            this.setState ( {
                color : '#0ff'

            });
        }
        console.log('ButtonGroupExample---onSwich',this.state.color)
    }

    render() {
        console.log('ButtonGroupExample---render')


        return (

            <Container >

                <NavBar title="ButtonGroupExample" onLeftTouchTap={this.onTouchTapBack.bind(this)}>
                </NavBar>
                <VLayout isFill={true} >


                    <HLayout >
                        <ButtonGroup mt='10'   ml='10' borderColor = {this.state.color} selBgColor="#0f0" items = {['日','月','季','年'] } fontSize='18' p="10" onSwich={this.onSwich.bind(this)}>

                        </ButtonGroup>
                    </HLayout>

                </VLayout>

            </Container>

        );
    }
}


