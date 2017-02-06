import React from 'react';


import { NavBar }  from   "../components/NavBar.js"
import { View }  from   "../components/View.js"
import {  VLayout}  from   "../components/VLayout.js"
import {  Container}  from   "../components/Container.js"

import { Button }  from   "../components/Button.js"
import { Test2Example }  from   "./Test2Example.js"


import { BaseController }  from   "./common/BaseController.js"

import { addEventListener,removeEventListener,triggerEvent }  from   "../utils/Event.js"

//
export class Test1Example extends BaseController {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        super.componentDidMount();
        console.log("Test1Example ----- componentDidMount!");
    }

    componentResume () {

        console.log("Test1Example ----- componentResume!");
    }
    componentPause () {
        console.log("Test1Example ----- componentPause!");
    }
    componentWillUnmount () {
        console.log("Test1Example ----- componentWillUnmount!");
    }

    onTouchTapBack(e) {
        this.props.navigationController.popView()
    }
    onTouchTap(e) {
        //alert('点击button');
        // this.props.navigationController.popView()
        this.props.nav.push(<Test2Example tag="Test2Example"> </Test2Example>);




        e.preventDefault();

    }


    render() {

        console.log("Test1Example ----- render!");
        return (

            <Container >

                <NavBar title="Test1Example" onLeftTouchTap={this.onTouchTapBack.bind(this)}>
                </NavBar>
                <VLayout isFill ={true} bgColor="#00f">


                    <Button    ml="10" mt="10" w="100" h="40" bgColo1r="#ff0" fontColor1="#000" onTouchTap={this.onTouchTap.bind(this)}>
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


