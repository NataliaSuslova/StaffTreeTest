var React = require('react');
var DBTreeViewNode = require('./DBTreeViewNode.jsx');
class DBTreeView extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(i => (
                    <DBTreeViewNode
                        key={i.name}
                        item={i}
                        disabled={this.props.disabled}
                        addToCache={this.props.addToCache} />
                ))}
            </ul>
        );
    }
}
module.exports = DBTreeView;