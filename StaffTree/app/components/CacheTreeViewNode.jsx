var React = require('react');
class CacheTreeViewNode extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: this.props.item, children: null };
        if (this.state.item.subordinates && this.state.item.subordinates.length) {
            this.state.children = (
                <ul type="disc">
                    {this.state.item.subordinates.map(i => (
                        <CacheTreeViewNode item={i} />
                    ))}
                </ul>
            );
        }
    }
    render() {
        return (
            <li>
                <h3>{this.state.item.name}</h3>
                <h3>{this.state.item.position}: {this.state.item.value} р.</h3>
                <div><button>Добавить</button> <button>Изменить</button></div>
                {this.state.children}
            </li>
        );
    }
}
module.exports = CacheTreeViewNode;