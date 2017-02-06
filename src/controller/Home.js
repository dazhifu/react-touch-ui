import React from 'react';
var ReactDOM = require("react-dom");


import { VLayout }  from   "../components/VLayout.js"


import { NavBar }  from   "../components/NavBar.js"

import { List }  from   "../components/List.js"
import { ListItem }  from   "../components/ListItem.js"

import { View }  from   "../components/View.js"


import {  Container}  from   "../components/Container.js"
import { Scroll }  from   "../components/Scroll.js"


import { NavBarExample }  from   "./NavBarExample.js"
import { PullListExample }  from   "./PullListExample.js"
import { TabBarExample }  from   "./TabBarExample.js"
import { GalleryExample }  from   "./GalleryExample.js"
import { ScrollExample }  from   "./ScrollExample.js"

import { ButtonExample }  from   "./ButtonExample.js"
import { CheckboxExample }  from   "./CheckboxExample.js"
import { RadioExample }  from   "./RadioExample.js"
import { BadgeExample }  from   "./BadgeExample.js"
import { InputExample }  from   "./InputExample.js"
import { ButtonGroupExample }  from   "./ButtonGroupExample.js"

import { SwitchExample }  from   "./SwitchExample.js"
import { DialogExample }  from   "./DialogExample.js"
import { ActionsheetExample  }  from   "./ActionsheetExample.js"

import { ALayoutExample  }  from   "./ALayoutExample.js"
import { LayoutExample  }  from   "./LayoutExample.js"
import { TestExample  }  from   "./TestExample.js"

import { BaseController }  from   "./common/BaseController.js"
import { EventExample  }  from   "./EventExample.js"
export class Home extends BaseController {
    constructor(props) {
        super(props);
        //console.log('wwww', document.getElementsByTagName('html'))
        //alert(document.body.clientWidth + "-")

    };


    onTouchTap(e, tag) {



        if (tag == 0) {
            this.props.navigationController.pushView(
                <NavBarExample  />,
                {
                    tag: 'NavBarExample'
                });

        } else if (tag == 1) {
            this.props.navigationController.pushView(
                <PullListExample  />
            );
        } else if (tag == 2) {
            this.props.navigationController.pushView(
                <TabBarExample  />
            );
        } else if (tag == 3) {
            this.props.navigationController.pushView(
                <GalleryExample  />
            );
        } else if (tag == 4) {
            this.props.navigationController.pushView(
                <ScrollExample  />
            );
        } else if (tag == 5) {
            this.props.navigationController.pushView(
                <ButtonExample  />
            );
        } else if (tag == 6) {
            this.props.navigationController.pushView(
                <RadioExample  />
            );
        } else if (tag == 7) {
            this.props.navigationController.pushView(
                <BadgeExample  />
            );
        } else if (tag == 8) {
            this.props.navigationController.pushView(
                <InputExample  />
            );
        } else if (tag == 9) {
            this.props.navigationController.pushView(
                <CheckboxExample  />
            );
        } else if (tag == 10) {
            this.props.navigationController.pushView(
                <ButtonGroupExample  />
            );
        } else if (tag == 11) {
            this.props.navigationController.pushView(
                <SwitchExample  />
            );
        } else if (tag == 12) {
            this.props.navigationController.pushView(
                <DialogExample  />
            );
        } else if (tag == 13) {
            this.props.navigationController.pushView(
                <ActionsheetExample  />
            );
        } else if (tag == 14) {
            this.props.navigationController.pushView(
                <ALayoutExample  />
            );
        } else if (tag == 15) {
            this.props.navigationController.pushView(
                <LayoutExample  />
            );
        } else if (tag == 16) {
            this.props.navigationController.pushView(
                <TestExample tag="TestExample"> </TestExample>
            );
        }
        else if (tag == 17) {
            this.props.navigationController.pushView(
                <EventExample tag="EventExample"> </EventExample>
            );
        }

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
    render() {

        const data = [
            {
                title: 'NavBar',
                indicator: 'true',
            },
            {
                title: 'PullList',
                indicator: 'true',
            },
            {
                title: 'TabBarExample',
                indicator: 'true',
            },
            {
                title: 'GalleryExample',
                indicator: 'true',
            }, {
                title: 'ScrollExample',
                indicator: 'true',
            }, {
                title: 'ButtonExample',
                indicator: 'true',
            }, {
                title: 'RadioExample',
                indicator: 'true',
            }, {
                title: 'BadgeExample',
                indicator: 'true',
            }, {
                title: 'InputExample',
                indicator: 'true',
            }, {
                title: 'CheckboxExample',
                indicator: 'true',
            }, {
                title: 'ButtonGroupExample',
                indicator: 'true',
            }, {
                title: 'SwitchExample',
                indicator: 'true',
            }, {
                title: 'DialogExample',
                indicator: 'true',
            }, {
                title: 'ActionsheetExample',
                indicator: 'true',
            }, {
                title: 'ALayoutExample',
                indicator: 'true',
            }, {
                title: 'LayoutExample',
                indicator: 'true',
            }, {
                title: 'NavigationController',
                indicator: 'true',
            }, {
                title: 'EventExample',
                indicator: 'true',
            }, {
                title: 'test',
                indicator: 'true',
            }, {
                title: 'test',
                indicator: 'true',
            }, {
                title: 'test1',
                indicator: 'true',
            },
        ];

        return (

            <Container bgColor="#fff" style={{display:'flex'}}>

                <NavBar title="AUI"
                        leftIcon={null}

                        onTouchTap={this.onTouchTap.bind(this)}>
                </NavBar>

                <Scroll isFill={true}>
                    <List >
                        {data.map((data, i) => {
                            return (
                                <ListItem
                                    {...data}
                                    tag={i}
                                    onTouchTap={this.onTouchTap.bind(this)}
                                />
                            );
                        })}
                    </List>
                </Scroll>


            </Container>


        )
    }
}




