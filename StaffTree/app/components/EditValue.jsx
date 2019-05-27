var React = require('react');
class EditValue extends React.Component {
    constructor(props){
        super(props);
        this.state = { newvalue: this.props.EditItem.value };
        this.updateState = this.updateState.bind(this);
    }
    updateState(e) {
        this.setState({ newvalue: e.target.value });
    }
    render() {
        //isFinite
        var isValid = isFinite(this.state.newvalue) === true && this.state.newvalue > 10000;
        var valueColor = isValid ? "green" : "red";
        return (
            <div class="editvalue">
                <p><label>Старое значение:</label>
                    <label>{this.props.EditItem.value}</label></p>   
                <p><label>Новое значение:</label>
                    <input
                        type="text"
                        value={this.state.newvalue}
                        onChange={this.updateState}
                        style={{ borderColor: valueColor }}
                    />
                </p>
                <button
                    disabled={!isValid}
                    onClick={() => {
                        var EditItem = this.props.EditItem;
                        EditItem.value = this.state.newvalue;
                        this.props.closeEdit();
                    }}> OK
                </button>               
                <button
                    onClick={() => { this.props.closeEdit() }}>Отмена
                </button>               
            </div>
        );
    }
}
module.exports = EditValue;