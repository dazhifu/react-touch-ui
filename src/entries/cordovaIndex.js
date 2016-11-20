import React from 'react';
import ReactDOM from 'react-dom';


var injectTapEventPlugin = require("react-tap-event-plugin");   //

import { BadgeExample }  from   "../controller/BadgeExample.js"


import { NavigationController }  from   "../controller/common/NavigationController.js"

injectTapEventPlugin();

export class App extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {

        const props = {
            rootView: <BadgeExample tag="BadgeExample"> </BadgeExample>
        };
        return (
            <NavigationController {...props} />
        );
    }
}

function onDeviceReady() {
    try {

        ReactDOM.render(< App/>, document.querySelector("#root"));

    } catch (e) {
        console.warn(e);
        alert(e.toString());
    }
}


// 判断cordova存不存在
if (window.orientation == undefined) {
    // 不存在直接启动页面
    ReactDOM.render(< App/>, document.querySelector("#root"));
} else {
    //存在
    document.addEventListener('deviceready', onDeviceReady, false);
}






