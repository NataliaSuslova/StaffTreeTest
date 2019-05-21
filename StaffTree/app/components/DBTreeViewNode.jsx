var React = require('react');
class DBTreeViewNode extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.item.subordinates && this.props.item.subordinates.length) {
            return (
                <li>
                    <h3><span class="treename">{this.props.item.name} </span><span class="edit">ред</span></h3>
                    <h3><b>Должность: </b>{this.props.item.position}</h3>
                    <h3><b>Зарплата: </b>{this.props.item.value} р.</h3>
                    <details open><summary>Подчиненные: </summary>
                        <ul>
                        {this.props.item.subordinates.map(i => (
                            <DBTreeViewNode item={i} />
                        ))}
                    </ul> </details>
                </li>
            );
        }
        else {
            return (
                <li>
                    <h3><span class="treename">{this.props.item.name} </span><span class="edit">ред</span></h3>
                    <h3><b>Должность: </b>{this.props.item.position}</h3>
                    <h3><b>Зарплата: </b>{this.props.item.value} р.</h3>
                    <h3>Подчиненные: нет </h3>
                </li>
            );
        };
        
    }
}
module.exports = DBTreeViewNode;