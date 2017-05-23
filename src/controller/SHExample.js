import React from 'react';


import { BaseController }  from   "./common/BaseController.js"
import { NavBar }  from   "../components/NavBar.js"


import {  Container}  from   "../components/Container.js"
import {  SHExample1}  from   "./SHExample1.js"

import banner from '../prototype/images/banner.png';

//
export class SHExample extends BaseController {



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
        this.props.nav.push(<SHExample1 tag="SHExample1" XD> </SHExample1>);
        e.preventDefault();

    }

    render() {

        console.log("TestExample ----- render!");
        return (
            <Container >

                <NavBar title="InputExample" onLeftTouchTap={this.onTouchTapBack.bind(this)}>
                </NavBar>
                <div className="content">

                    <img src={banner} width="100%"/>
                    <ul className="task_list clearfix" onTouchTap={this.onTouchTap.bind(this)}>
                        <li>工作任务</li>
                        <li>
                            <div className="num">11</div>
                            <div className="wait">我的代办</div>
                        </li>
                        <li>
                            <div className="num">11</div>
                            <div className="wait">我的已办</div>
                        </li>

                        <li>
                            <div className="num">11</div>
                            <div className="wait">我的申请</div>
                        </li>
                    </ul>

                    <div className="notice">
                        <span className="notice_tt">【通知公告】</span><span>国际创投主板全球创新发展及217人工智能</span>
                    </div>

                    <ul className="menu_list clearfix">
                        <li>
                            <div className="menu1"></div>
                            <div className="menu_tt">信息快递</div>
                        </li>
                        <li>
                            <div className="menu2"></div>
                            <div className="menu_tt">公司发文</div>
                        </li>
                        <li>
                            <div className="menu3"></div>
                            <div className="menu_tt">通讯录</div>
                        </li>
                        <li>
                            <div className="menu4"></div>
                            <div className="menu_tt">我的文档</div>
                        </li>

                    </ul>


                    <div className="title_bg">
                        <span className="title_icon">&nbsp;</span>
                        办公流程
                    </div>

                    <ul className="menu_list1 clearfix">
                        <li>
                            <div className="menu5"></div>
                            <div className="menu_tt mt-10">信息快递</div>
                        </li>
                        <li>
                            <div className="menu6"></div>
                            <div className="menu_tt mt-10">公司发文</div>
                        </li>
                        <li>
                            <div className="menu7"></div>
                            <div className="menu_tt mt-10">通讯录</div>
                        </li>
                        <li>
                            <div className="menu8"></div>
                            <div className="menu_tt mt-10">我的文档</div>
                        </li>
                        <li>
                            <div className="menu9"></div>
                            <div className="menu_tt mt-10">公司发文</div>
                        </li>
                        <li>
                            <div className="menu10"></div>
                            <div className="menu_tt mt-10">通讯录</div>
                        </li>


                    </ul>
                    <div className="foot">
                        <p>上海国际创投股权投资基金管理有限公司</p>
                        SHANGHAI SIIC FUND MANAGEMENT CO.,LTD
                    </div>


                </div>
            </Container>

        );
    }
}


