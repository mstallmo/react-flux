"use strict";

const React = require('react');

class DropDown extends React.Component {
    render() {
        let wrapperClass = 'form-group';
        if (this.props.error && this.props.error.length > 0) {
            wrapperClass += " " + 'has-error';
        }

        const options = this.props.options;
        const optionList =  options.map((option) =>
            <option key={option.id} value={option.id}>{option.text}</option>
        );

        return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field">
                    <select className="form-control"
                            name={this.props.name}
                            onChange={this.props.onChange}
                            defaultValue={this.props.value} >
                        {optionList};
                    </select>
                    <div className="input">{this.props.error}</div>
                </div>
            </div>
        );
    }
}

module.exports = DropDown;