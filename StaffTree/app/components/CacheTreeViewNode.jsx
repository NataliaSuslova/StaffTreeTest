var React = require('react');
class CacheTreeViewNode extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li>
                <h3>{this.props.item.name}</h3>
                <h3>{this.props.item.position}: {this.props.item.value} р.</h3>
                <div>
                    <button
                        disabled={this.props.disabled}
                        onClick={() => { this.props.showNewSubordinate(this.props.item) }}
                    >Добавить
                    </button>
                    <button
                        disabled={this.props.disabled}
                        onClick={() => { this.props.showEditValue(this.props.item) }}
                    >Изменить
                    </button >
                </div>
                <ul>
                    {this.props.item.subordinates.map(i => (
                        <CacheTreeViewNode
                            key={i.name}
                            item={i}
                            disabled={this.props.disabled}
                            showEditValue={this.props.showEditValue}
                            showNewSubordinate={this.props.showNewSubordinate} />
                    ))}
                </ul>
            </li>
        );
    }
}
module.exports = CacheTreeViewNode;