
import React from 'react';
import { View }  from   "./View.js"
import  './Layout.scss'

import classnames from 'classnames';

export class Container extends View {

	constructor(props) {
		super(props);

	};

	render() {

		var {
			flexWrap,
			ah,
            av,
			as,
			className,
			...props
			} = this.props;

		var alignjustify;
		if(av == "start")  {
			alignjustify  = "aui-layout-justify-content-flex-start";
		} else if(av == "center")  {
			alignjustify  = "aui-layout-justify-content-center";
		} else if(av == "end")  {
			alignjustify  = "aui-layout-justify-content-flex-end";
		} else {
			alignjustify  = "aui-layout-justify-content-"+av;
		}


		var alignItemsContent;
		if(ah == "start")  {
			alignItemsContent  = "aui-layout-align-items-flex-start";
		} else if(ah == "center")  {
			alignItemsContent  = "aui-layout-align-items-center";
		} else if(ah == "end")  {
			alignItemsContent  = "aui-layout-align-items-flex-end";
		}else {
			alignItemsContent  = "aui-layout-align-items-"+ah;
		}

		var alignSelfContent;
		if(as == "start")  {
			alignSelfContent  = "aui-layout-align-self-flex-start";
		} else if(as == "center")  {
			alignSelfContent  = "aui-layout-align-self-center";
		} else if(as == "end")  {
			alignSelfContent  = "aui-layout-align-self-flex-end";
		}else {
			alignSelfContent  = "aui-layout-align-self-"+as;
		}

		var classname = classnames(className,"aui-layout-flexbox","aui-layout-column", "aui-layout-"+flexWrap,alignjustify,alignItemsContent,alignSelfContent);
		//console.log("Layout->render",classname,argType)
		return (
			<View  h="100%" w="100%"
				className={classname}
//				className={ super.classNames("flexbox","column")}
				{...props}


				/>
		);
	}
}


