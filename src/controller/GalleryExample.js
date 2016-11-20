import React from 'react';


import { NavBar }  from   "../components/NavBar.js"
import { View }  from   "../components/View.js"
import {  VLayout}  from   "../components/VLayout.js"
import {  Container}  from   "../components/Container.js"

import { Gallery }  from   "../components/Gallery.js"

import { GalleryContent }  from   "../components/GalleryContent.js"

import { BaseController }  from   "./common/BaseController.js"
//
export class GalleryExample extends BaseController {

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

        console.log("99999999999999955")
    }

    onTouchTapSel(e, tag) {
        console.log("999999999999999");
        // this.props.navigationController.popView()

    }


    render() {


        return (

            <Container >

                <NavBar title="GalleryExample" onLeftTouchTap={this.onTouchTapBack.bind(this)}>
                </NavBar>
                <VLayout isFill={true} >

                    <Gallery h="240" ml ='10' mr = '10' mt ='10' >
                        <GalleryContent bgColor="#F00">


                        </GalleryContent>
                        <GalleryContent bgColor="#FF0">


                        </GalleryContent>
                        <GalleryContent bgColor="#F0F">



                        </GalleryContent>
                        <GalleryContent bgColor="#00F">


                        </GalleryContent>
                       </Gallery>

                    <View bgColor="#0XF00" h="300">
                    </View>

                </VLayout>

                <NavBar title="TabBar" onTouchTapBack={this.onTouchTapSel.bind(this)}>
                </NavBar>
            </Container>

        );
    }
}


