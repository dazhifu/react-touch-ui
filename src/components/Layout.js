
import React from 'react';
import { View }  from   "./View.js"
import  './Layout.scss'
import assign from 'object-assign'
import classnames from 'classnames';

export class Layout extends React.Component {

	constructor(props) {
		super(props);

	};

	render() {

		var {
			flexDirection,
			flexWrap,
			justifyContent,
			alignItems,
			alignContent,
			alignSelf,
			className,
			...props
			} = this.props

		if(justifyContent) justifyContent  = "justify-content-"+justifyContent;
		if(alignItems) alignItems  = "align-items-"+alignItems;

		if(alignContent) alignContent  = "align-content-"+alignContent;
		if(alignSelf) alignSelf  = "align-self-"+alignSelf;

		var classname = classnames(className,"aui-layout-flexbox","aui-layout-"+flexDirection, "aui-layout-"+flexWrap,"aui-layout-"+justifyContent,"aui-layout-"+alignItems,"aui-layout-"+alignContent ,"aui-layout-"+alignSelf);
		//console.log("Layout->render",classname,argType)

		const  baseStyle = assign(
			{alignContent:"center"}

		)

		return (
			<View
				className={classname}

//				className={ super.classNames("flexbox","column")}
				{...props}


				/>
		);
	}
}


