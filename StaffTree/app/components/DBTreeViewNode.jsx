var React = require('react');
class DBTreeViewNode extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.item.subordinates && this.props.item.subordinates.length) {
            return (
                <li>
                    <h3><span class="treename">{this.props.item.name} </span> <button disabled={this.props.disabled} onClick={() => { this.props.addToCache(this.props.item)}} class="edit">ред.</button></h3>
                    <h3><b>Должность: </b>{this.props.item.position}</h3>
                    <h3><b>Зарплата: </b>{this.props.item.value} р.</h3>
                    <details open><summary>Подчиненные: </summary>
                        <ul>
                        {this.props.item.subordinates.map(i => (
                                <DBTreeViewNode item={i} disabled={this.props.disabled} addToCache={this.props.addToCache} />
                        ))}
                    </ul> </details>
                </li>
            );
        }
        else {
            return (
                <li>
                    <h3><span class="treename">{this.props.item.name} </span><button onClick={() => { this.props.addToCache(this.props.item)}} class="edit">ред.</button></h3>
                    <h3><b>Должность: </b>{this.props.item.position}</h3>
                    <h3><b>Зарплата: </b>{this.props.item.value} р.</h3>
                    <h3>Подчиненные: нет </h3>
                </li>
            );
        };
        
    }
}
module.exports = DBTreeViewNode;