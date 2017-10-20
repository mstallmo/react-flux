"use strict";

const React = require('react');
const Route = require('react-router-dom').Route;
const AuthorForm = require('./authorForm');
const AuthorActions = require('../../actions/authorActions');
const AuthorStore = require('../../stores/authorStore');
const toastr = require('toastr');

class ManageAuthorPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            author: {id: '', firstName: '', lastName: ''},
            errors: {}
        };
    }

    componentWillMount() {
        const authorId = this.props.match.params.id;

        if (authorId) {
            this.setState({author: AuthorStore.getAuthorById(authorId) });
        }
    }

    setAuthorState (event) {
        const field = event.target.name;
        const value = event.target.value;
        this.state.author[field] = value;
        this.setState({author: this.state.author});
    }

    authorFormIsValid() {
        let formIsValid = true;
        this.state.errors = {};

        if (this.state.author.firstName.length < 3) {
            this.state.errors.firstName = 'First Name must be at least 3 characters';
            formIsValid = false;
        }

        if (this.state.author.lastName.length < 3) {
            this.state.errors.lastName = 'Last name must be at least 3 characters';
            formIsValid = false;
        }

        this.setState({errors: this.state.errors });
        return formIsValid;
    }

    saveAuthor (event) {
        event.preventDefault();
        if (!this.authorFormIsValid()) {
            return;
        }

        if (this.state.author.id) {
            AuthorActions.updateAuthor(this.state.author);
        } else {
            AuthorActions.createAuthor(this.state.author);
        }

        toastr.success('Author Saved!');
        this.props.history.push('/authors');
    }

    render() {
        return(
            <Route render={({history}) => (<AuthorForm author={this.state.author}
                        onChange={this.setAuthorState.bind(this)}
                        onSave={this.saveAuthor.bind(this)}
                        errors={this.state.errors} /> )} />
        );
    }
}

module.exports = ManageAuthorPage;