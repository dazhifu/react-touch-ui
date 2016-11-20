import React from 'react';


import { NavBar }  from   "../components/NavBar.js"
import { View }  from   "../components/View.js"
import {  VLayout}  from   "../components/VLayout.js"
import {  Container}  from   "../components/Container.js"

import { Button }  from   "../components/Button.js"

import { Event1Example }  from   "./Event1Example.js"

import { BaseController }  from   "./common/BaseController.js"

import { addEventListener,removeEventListener,triggerEvent }  from   "../utils/Event.js"
import { showTost,showLoading ,stopLoading}  from   "../components/Toast.js"
//
export class EventExample extends BaseController {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        super.componentDidMount();
        addEventListener('TEST', this.onTouchEvent.bind(this))

    }
    componentResume () {
        super.componentResume();

    }
    componentPause () {
        super.componentPause();
    }


    componentWillUnmount () {
        super.componentWillUnmount();

    }


    onTouchEvent(arg) {
        console.log("TestExample ----- onTouchEvent!", this);
        showTost(arg)
    }

    onTouchTapBack(e) {

        this.props.navigationController.popView()
    }

    onTouchTap(e) {
         this.props.nav.push(<Event1Example  tag="Event1Example"> </Event1Example>);
        e.preventDefault();

    }

    render() {

        console.log("TestExample ----- render!");
        return (

            <Container >

                <NavBar title="EventExample" onLeftTouchTap={this.onTouchTapBack.bind(this)}>
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


