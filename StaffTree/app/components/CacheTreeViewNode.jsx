var React = require('react');
//var EditValue = require('./EditValue.jsx');
class CacheTreeViewNode extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li>
                <h3>{this.props.item.name}</h3>
                <h3>{this.props.item.position}: {this.props.item.value} р.</h3>
                <div><button>Добавить</button> <button onClick={() => { this.props.showEditValue(this.props.item) }}>Изменить</button ></div>
                <ul>
                    {this.props.item.subordinates.map(i => (
                        <CacheTreeViewNode item={i} showEditValue={this.props.showEditValue} />
                    ))}
                </ul>
            </li>
        );
    }
}
module.exports = CacheTreeViewNode;