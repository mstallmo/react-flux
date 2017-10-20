"use strict";

const React = require('react');

class DropDown extends React.Component {
    render() {
        let wrapperClass = 'form-group';
        if (this.props.error && this.props.error.length > 0) {
            wrapperClass += " " + 'has-error';
        }

        const authors = this.props.authors;
        const authorList =  authors.map((author) => (
            <option key={author.id} value={author}>{author.firstName} {author.lastName}</option>
        ));

        return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field">
                    <select className="form-control"
                            name={this.props.name}
                            value={this.props.value}
                            onChange={this.props.onChange}>
                        {authorList};
                    </select>
                    <div className="input">{this.props.error}</div>
                </div>
            </div>
        );
    }
}

module.exports = DropDown;