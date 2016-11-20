import React from 'react';


import { NavBar }  from   "../components/NavBar.js"
import { View }  from   "../components/View.js"
import {  VLayout}  from   "../components/VLayout.js"
import {  Container}  from   "../components/Container.js"

import { Button }  from   "../components/Button.js"

import { Test3Example }  from   "./Test3Example.js"


import { BaseController }  from   "./common/BaseController.js"

//
export class Test2Example extends BaseController {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        super.componentDidMount();
        console.log("Test2Example ----- componentDidMount!");
    }

    componentResume () {

        console.log("Test2Example ----- componentResume!");
    }
    componentPause () {
        console.log("Test2Example ----- componentPause!");
    }
    componentWillUnmount () {
        console.log("Test2Example ----- componentWillUnmount!");
    }

    onTouchTapBack(e) {
        this.props.navigationController.popView()
    }
    onTouchTap(e) {
        this.props.nav.push(<Test3Example tag="Test3Example"> </Test3Example>);
        e.preventDefault();

    }

    render() {

        console.log("Test2Example ----- render!");
        return (

            <Container >

                <NavBar title="Test2Example" onLeftTouchTap={this.onTouchTapBack.bind(this)}>
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


