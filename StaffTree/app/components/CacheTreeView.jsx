var React = require('react');
var CacheTreeViewNode = require('./CacheTreeViewNode.jsx');
class CacheTreeView extends React.Component {
    render() {
        return (
            <ul type="disc">
                {this.props.items.map(i => (
                    <CacheTreeViewNode item={i} />
                ))}
            </ul>
        );
    }
}
module.exports = CacheTreeView;