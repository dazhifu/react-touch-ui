import React from 'react';

import assign from 'object-assign'
import classnames from 'classnames';

import { View }  from   "./View.js"
import Utils from   "./common/Utils.js"

import  './ListItem.scss'
import ArrowRight from 'react-icons/lib/io/ios-arrow-forward';

export class ListItem extends React.Component {


    static propTypes = {
        // 主标题
        title: React.PropTypes.string,
        //子标题
        subTitle: React.PropTypes.string,
        // 是否显示右箭头,默认不显示, = true 显示
        indicator: React.PropTypes.string,
        //  右上角 时间
        after: React.PropTypes.string,
        // 描述
        desc: React.PropTypes.string,
        // 左icon
        media: React.PropTypes.string,

    }

    static defaultProps = {

    }

    constructor(props) {
        super(props);


    };

    renderTitleRow() {
        let {
            title,
            subTitle,

            indicator,
            } = this.props;

        let itemTitle = title ? (
            <div
                key="itemTitle"
                className={ classnames('aui-item-title')}
            >
                {title}
            </div>
        ) : null;

        let titleChildren = [
            itemTitle,
            this.renderAddon('after'),
            indicator ? (
                <div
                    className={classnames('aui-item-icon')}
                >
                    <ArrowRight />
                </div>
            ) : null,
        ];

        return subTitle ? (
            <div
                className={ classnames('aui-item-title-row') }
                key="itemTitleRow"
            >
                {titleChildren}
            </div>
        ) : titleChildren;
    };

    renderMain() {
        let {
            media,
            subTitle,
            desc,
            children
            } = this.props;
        let titleRow = this.renderTitleRow();
        let notJustTitle = media || subTitle || desc || children;

        // remove wrapper if without media/subTitle/children
        return notJustTitle ? (
            <div

                className={classnames('aui-item-main') }
            >
                {titleRow}
                {this.renderAddon('subTitle')}
                {this.renderAddon('desc')}
                {children}
            </div>
        ) : titleRow;
    };

    wrapLink(children) {
        let {
            linkComponent,
            linkProps,
            href,
            target,
            } = this.props;

        return linkComponent ?
            React.createElement(linkComponent, linkProps, children) : (
            <a
                href={href}
                target={target}
            >
                {children}
            </a>);
    };

    renderAddon(type) {
        return this.props[type] ? (
            <div

                className={classnames('aui-item-' +type.toLowerCase())  }
            >
                {this.props[type]}
            </div>
        ) : null;
    };

    onTouchTapEvent(e) {
        let {
            tag,
            } = this.props;
        if (this.onTouchTap)
            this.onTouchTap(e,tag)

    }

    render() {
        let {
            className,
            role,
            subTitle,
            onTouchTap,
            media,
            children,
            indicator,
            nested,
            ...props
            } = this.props;


        this.onTouchTap = onTouchTap;
        delete props.title;
        delete props.after;
        delete props.linkProps;
        delete props.desc;

        let itemChildren = [
            this.renderAddon('media'),
            this.renderMain(),
        ];


        let classSet = {};


        classSet[classnames('aui-item-' + nested)] = nested;
        classSet[classnames('aui-item-header')] = role === 'header';
        classSet[classnames('aui-item-linked')] = indicator;
        subTitle && (classSet[classnames('aui-item-content')] = true);

        return (
            <li
                {...props}
                onTouchTap={this.onTouchTapEvent.bind(this)}
                className={classnames("aui-item",classSet, className)}
            >
                {role === 'header' ? children :
                    (indicator) ? this.wrapLink(itemChildren) : itemChildren}
            </li>
        );
    }
}


