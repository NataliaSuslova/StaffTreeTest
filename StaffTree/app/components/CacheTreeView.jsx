var React = require('react');
var CacheTreeViewNode = require('./CacheTreeViewNode.jsx');
class CacheTreeView extends React.Component {
    render() {
        return (
            <ul type="disc">
                {this.props.items.map(i => (
                    <CacheTreeViewNode
                        item={i}
                        disabled={this.props.disabled}
                        showEditValue={this.props.showEditValue}
                        showNewSubordinate={this.props.showNewSubordinate} />
                ))}
            </ul>
        );
    }
}
module.exports = CacheTreeView;