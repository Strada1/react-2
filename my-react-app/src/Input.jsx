import React from 'react';

class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.props.onValueChange(event.target.value);
    }

    render() {
        const valueText = this.props.value;

        return (
            <input
                value={valueText}
                onChange={this.handleChange}
                className="inptText"
                type="text"
                placeholder="Введите имя"
            />
        );
    }
}

export default TextInput;
