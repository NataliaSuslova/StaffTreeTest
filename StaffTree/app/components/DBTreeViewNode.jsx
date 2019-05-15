var React = require('react');
class DBTreeViewNode extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: this.props.item, children: null };
        if (this.state.item.subordinates && this.state.item.subordinates.length) {
            this.state.children = (
                <ul type="disc">
                    {this.state.item.subordinates.map(i => (
                        <DBTreeViewNode item={i} />
                    ))}
                </ul>
            );
        }
    }
    render() {
        return (
            <li>
                <p>{this.state.item.name}</p>
                <p>Должность: {this.state.item.position}</p>
                <p>Зарплата: {this.state.item.value} р.</p>
                <details open><summary>Подчиненные: </summary> {this.state.children} </details>
            </li>
        );
    }
}
module.exports = DBTreeViewNode;