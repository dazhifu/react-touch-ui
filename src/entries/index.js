import React from 'react';
import ReactDOM from 'react-dom';


var injectTapEventPlugin = require("react-tap-event-plugin");   //

import { Home }  from   "../controller/Home.js"


import { NavigationController }  from   "../controller/common/NavigationController.js"

injectTapEventPlugin();


export class App extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {

        const props = {
            rootView:  <Home tag="Home" > </Home>
        };
        return (
            <NavigationController {...props} />
        );
    }
}
ReactDOM.render(< App/>, document.querySelector("#root"));


