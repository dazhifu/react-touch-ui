import React from 'react';


import { NavBar }  from   "../components/NavBar.js"
import { View }  from   "../components/View.js"
import {  VLayout}  from   "../components/VLayout.js"
import {  Container}  from   "../components/Container.js"

import { Button }  from   "../components/Button.js"


import { BaseController }  from   "./common/BaseController.js"

import { addEventListener,removeEventListener,triggerEvent }  from   "../utils/Event.js"
//
export class Event1Example extends BaseController {

    constructor(props) {
        super(props);

    }


    componentDidMount() {
        super.componentDidMount();



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

    onTouchTapBack(e) {
        this.props.nav.popView()
    }


    onTouchTap(e) {

        triggerEvent('TEST', '45456567')
    }

    render() {

        return (

            <Container >

                <NavBar title="Event1Example" onLeftTouchTap={this.onTouchTapBack.bind(this)}>
                </NavBar>
                <VLayout isFill ={true} bgColor="#00f">

                    <Button    ml="10" mt="10" w="100" h="40" bgColo1r="#ff0" fontColor1="#000" onTouchTap={this.onTouchTap.bind(this)}>
                          触发事件
                    </Button>

                </VLayout>

            </Container>

        );
    }
}


