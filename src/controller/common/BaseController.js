import React from 'react';



//
export class BaseController extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.nav.addViewInst.call(this.props.nav,this);

    }
    componentResume () {

    }
    componentPause () {

    }
    componentWillUnmount () {

    }

}


