"use strict";

const React = require('react');
const AuthorApi = require('../../api/authorApi');
const AuthorList = require('./authorList');

class Authors extends React.Component {
    constructor(props) {
        super(props);
        this.state = { authors: [] };
    }

    componentDidMount() {
        this.setState({authors: AuthorApi.getAllAuthors()});
    }

    render() {
        return (
          <div>
              <h1>Authors</h1>

              <AuthorList authors={this.state.authors} />
          </div>
        );
    }
}

module.exports = Authors;