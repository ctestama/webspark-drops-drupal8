/**
 * Created by ctestama on 1/5/18.
 */
class superheroConfigs extends React.Component {

    constructor(props) {
        super(props);

        // todo: pass configs from Drupal
        this.state = props.configs;

        this.handleInputChange = this.handleInputChange.bind(this);
        this.setDrupalField();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState(
            {
                [name]: value
            },
            this.setDrupalField
        );
    }

    setDrupalField() {
        const input = document.getElementById(this.props.superhero_input_id);
        input.value = JSON.stringify(this.state);
    }

    render() {
        return (
            <form>
                <label>
                    Button 1 Title:
                    <input
                        name="buttonTitle1"
                        type="textfield"
                        checked={this.state.buttonTitle1}
                        onChange={this.handleInputChange} />

                </label>
                    <br/>
                <label>
                    Button 1 Url:
                    <input
                        name="buttonUrl1"
                        type="textField"
                        value={this.state.buttonUrl1}
                        onChange={this.handleInputChange} />
                </label>
                    <br/><br/>
                <label>
                    Button 2 Title:
                    <input
                        name="buttonTitle2"
                        type="textfield"
                        checked={this.state.buttonTitle2}
                        onChange={this.handleInputChange} />

                </label>
                    <br/>
                <label>
                    Button 2 Url:
                    <input
                        name="buttonUrl2"
                        type="textField"
                        value={this.state.buttonUrl2}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}

export default superheroConfigs;