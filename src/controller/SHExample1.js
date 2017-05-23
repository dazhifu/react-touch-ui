import React from 'react';


import { BaseController }  from   "./common/BaseController.js"
import { NavBar }  from   "../components/NavBar.js"


import {  Container}  from   "../components/Container.js"

//
export class SHExample1 extends BaseController {

    constructor(props) {
        super(props);

    }


    componentDidMount() {
        super.componentDidMount();

        console.log("TestExample ----- componentDidMount!");

    }

    componentResume() {
        super.componentResume();
        console.log("TestExample ----- componentResume!");
    }

    componentPause() {
        super.componentPause();
        console.log("TestExample ----- componentPause!");
    }


    componentWillUnmount() {
        super.componentWillUnmount();

        console.log("TestExample ----- componentWillUnmount!");
    }


    onTouchTapBack(e) {

        this.props.navigationController.popView()
    }

    onTouchTap(e) {
        //this.props.nav.push(<Test1Example tag="Test1Example"> </Test1Example>);
        e.preventDefault();

    }

    render() {

        console.log("TestExample ----- render!");
        return (
            <Container >

                <NavBar title="InputExample" onLeftTouchTap={this.onTouchTapBack.bind(this)}>
                </NavBar>
                <div className="content">
                    <ul className="info_list">
                        <li>
                            员工姓名：周恩平
                        </li>
                        <li>
                            所属部门：信息技术部
                        </li>
                        <li>
                            工作岗位：技术经理
                        </li>
                    </ul>

                    <div className="leave_time">
                        <div className="lt_tt">请假时间：</div>

                        <div className="time">
                            <span className="col_star">*</span>开始时间：
                        </div>
                        <div className="time">
                            <span className="col_star">*</span>结束时间：
                        </div>

                    </div>


                </div>
            </Container>

    );
    }
    }


