"use strict";

const React = require('react');
const Route = require('react-router-dom').Route;
const CourseForm = require('./courseForm');
const AuthorStore = require('../../stores/authorStore');

class ManageCoursePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author:
                {
                  id: '',
                  firstName: '',
                  lastName: ''
                },
            authors: AuthorStore.getAllAuthors(),
            category: '',
            length: "",
            errors: {}
        };
    }

    onTitleChange(event) {
        const value = event.target.value;
        this.state.title = value;
        this.setState({title: this.state.title});
    }

    onAuthorChange(event) {
        const value = event.target.value;
        console.log(value.firstName);
        //this.state.author = value;
        //this.setState({author: this.state.author});
    }

    onCategoryChange(event) {
        const value = event.target.value;
        this.state.category = value;
        this.setState({category: this.state.category});
    }

    onLengthChange(event) {
        const value = event.target.value;
        this.state.length = value;
        this.setState({length: this.state.length});
    }

    render() {
        return (
            <Route render={({history}) => (<CourseForm title={this.state.title}
                                                       author={this.state.author}
                                                       authors={this.state.authors}
                                                       category={this.state.category}
                                                       length={this.state.length}
                                                       onTitleChange={this.onTitleChange.bind(this)}
                                                       onAuthorChange={this.onAuthorChange.bind(this)}
                                                       onCategoryChange={this.onCategoryChange.bind(this)}
                                                       onLengthChange={this.onLengthChange.bind(this)}
                                                       errors={this.state.errors} />)} />
        );
    }
}

module.exports = ManageCoursePage;