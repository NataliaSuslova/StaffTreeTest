﻿var React = require('react');
var DBTreeViewNode = require('./DBTreeViewNode.jsx');
class DBTreeView extends React.Component {

    render() {
        return (
            <ul type="disc">
                {this.props.items.map(i => (
                    <DBTreeViewNode item={i} />
                ))}
            </ul>
        );
    }
}
module.exports = DBTreeView;