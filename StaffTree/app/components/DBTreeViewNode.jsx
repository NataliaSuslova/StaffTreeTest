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
                <h3><span class="treename">{this.state.item.name} </span><span class="edit">ред</span></h3>
                <h3><b>Должность: </b>{this.state.item.position}</h3>
                <h3><b>Зарплата: </b>{this.state.item.value} р.</h3>
                <details open><summary>Подчиненные: </summary> {this.state.children} </details>
            </li>
        );
    }
}
module.exports = DBTreeViewNode;