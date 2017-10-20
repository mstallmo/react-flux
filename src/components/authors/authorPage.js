"use strict";

const React = require('react');
const Link = require('react-router-dom').Link;
const AuthorStore = require('../../stores/authorStore');
const AuthorList = require('./authorList');


class Authors extends React.Component {
    constructor(props) {
        super(props);
        this.state = { authors: AuthorStore.getAllAuthors() };
    }

    componentWillMount() {
        AuthorStore.addChangeListener(() => this._onChange());
    }

    componentWillUnmount() {
        AuthorStore.removeChangeListener(() => this._onChange());
    }

    _onChange() {
        this.setState({ authors: AuthorStore.getAllAuthors() });
    }

    render() {
        return (
          <div>
              <h1>Authors</h1>
              <Link to="/author" className="btn btn-default">Add Author</Link>
              <AuthorList authors={this.state.authors}/>
          </div>
        );
    }
}

module.exports = Authors;