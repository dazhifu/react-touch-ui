import React from 'react';
import { BaseController }  from   "./common/BaseController.js"

import { PullList }  from   "../components/PullList.js"
import { NavBar }  from   "../components/NavBar.js"
import { View }  from   "../components/View.js"
import { VLayout }  from   "../components/VLayout.js"

import {  Container}  from   "../components/Container.js"



//
export class PullListExample extends BaseController {
    /*
     * 功能 : 构造函数 可以定义state变量
     */
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            currentPage: 1,
            lastPage: false
        };

        this.state.list = [{
            id: 1,
            name: '苹果'
        }, {
            id: 2,
            name: '苹果'
        }, {
            id: 13,
            name: '苹果'
        }, {
            id: 14,
            name: '苹果'
        }];
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


    //调用 IScroll refresh 后回调函数
    handleRefresh(downOrUp, callback) {
        console.log("pulllistcv---handleRefresh");
        //真实的世界中是从后端取页面和判断是否是最后一页
        let {currentPage, lastPage} = this.state;
        if (downOrUp === 'up') { // 加载更多
            if (currentPage === 5) {
                lastPage = true;
            } else {
                currentPage++;
            }
        } else { // 刷新
            lastPage = false;
            currentPage = 1;
        }
        setTimeout(() => {
            var list = {
                id: 1,
                name: '苹果'
            };

            this.state.list.push(list, list, list, list);

            console.log("pulllistcv--- this.state.list", this.state.list);
            this.forceUpdate();
            //this.state.
            if (callback && typeof callback === 'function') {
                callback();
            }
        }, 1000);

    }

    onTouchTapBack(e) {
        this.props.navigationController.popView();
        e.preventDefault();

    }

    render() {
        console.log("pulllistcv---render");
        const {list} = this.state;


        return (

            < Container>

                <NavBar title="PullListExample" onLeftTouchTap={this.onTouchTapBack.bind(this)}>
                </NavBar>

                    <PullList handleRefresh={this.handleRefresh.bind(this)} isFill={true} >
                        <ul className="example-paging">
                            {list.map((item) =>
                                <li>{item.id}</li>
                            )}
                        </ul>
                    </PullList>

                <NavBar title="AUI" onLeftTouchTap={this.onTouchTapBack.bind(this)}>
                </NavBar>

            </Container>

        );
    }
}


