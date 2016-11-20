import React from 'react';


import { NavBar }  from   "../components/NavBar.js"
import { View }  from   "../components/View.js"
import {  VLayout}  from   "../components/VLayout.js"
import {  Container}  from   "../components/Container.js"

import { Button }  from   "../components/Button.js"

import { Test1Example }  from   "./Test1Example.js"

import { BaseController }  from   "./common/BaseController.js"

import { addEventListener,removeEventListener,triggerEvent }  from   "../utils/Event.js"

//
export class TestExample extends BaseController {

    constructor(props) {
        super(props);

    }


    componentDidMount() {
        super.componentDidMount();

        console.log("TestExample ----- componentDidMount!");

    }
    componentResume () {
        super.componentResume();
        console.log("TestExample ----- componentResume!");
    }
    componentPause () {
        super.componentPause();
        console.log("TestExample ----- componentPause!");
    }


    componentWillUnmount () {
        super.componentWillUnmount();

        console.log("TestExample ----- componentWillUnmount!");
    }


    onTouchTapBack(e) {

        this.props.navigationController.popView()
    }
    onTouchTap(e) {
         this.props.nav.push(<Test1Example  tag="Test1Example"> </Test1Example>);
        e.preventDefault();

    }

    render() {

        console.log("TestExample ----- render!");
        return (

            <Container >

                <NavBar title="ButtonExample" onLeftTouchTap={this.onTouchTapBack.bind(this)}>
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


