"use strict";

const React = require('react');
const Input = require('../common/textInput');

class AuthorForm extends React.Component {
    render(){
        return(
            <form>
                <h1>Manage Author</h1>
                <Input name="firstName"
                       label="First Name"
                       value={this.props.author.firstName}
                       onChange={this.props.onChange}
                       error={this.props.errors.firstName} />

                <Input name="lastName"
                       label="Last Name"
                       value={this.props.author.lastName}
                       onChange={this.props.onChange}
                       error={this.props.errors.lastName} />
                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
            </form>
        );
    }
};

module.exports = AuthorForm;