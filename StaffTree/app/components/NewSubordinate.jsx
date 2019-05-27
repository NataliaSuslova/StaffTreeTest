var React = require('react');
class NewSubordinate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            position: "",
            value: "",
        };
        this.updateName = this.updateName.bind(this);
        this.updatePosition = this.updatePosition.bind(this);
        this.updateValue = this.updateValue.bind(this);
    }
    updateName(e) {
        this.setState({
            name: e.target.value,
        });
    }
    updatePosition(e) {
        this.setState({
            position: e.target.value,
        });
    }
    updateValue(e) {
        this.setState({
            value: e.target.value,
        });
    }
    render() {
        return (
            <div class="editvalue">
                <p>
                    <label>Имя:</label>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.updateName} />
                </p>
                <p>
                    <label>Должность:</label>
                    <input
                        type="text"
                        value={this.state.position}
                        onChange={this.updatePosition} />
                </p>
                <p>
                    <label>Зарплата:</label>
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.updateValue} />
                </p>
                <button
                    onClick={() => {
                        const newitem = {
                            name: this.state.name,
                            position: this.state.position,
                            value: this.state.value,
                            subordinates: []
                        }
                        var EditItem = this.props.EditItem;
                        EditItem.subordinates = EditItem.subordinates.concat(newitem);
                        this.props.closeEdit();
                    }}> OK </button>
                <button onClick={() => { this.props.closeEdit() }} >Отмена</button>
            </div>
        );
    }
}
module.exports = NewSubordinate;