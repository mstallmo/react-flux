"use strict";

const React = require('react');
const Route = require('react-router-dom').Route;
const _ = require('lodash');
const CourseForm = require('./courseForm');
const AuthorStore = require('../../stores/authorStore');
const CourseStore = require('../../stores/courseStore');
const CourseActions = require('../../actions/courseActions');
const toastr = require('toastr');

class ManageCoursePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course: {
                id: '',
                title: '',
                author: {
                    id: '',
                    name: ''
                },
                category: '',
                length: '',
            },
            authors: AuthorStore.getAllAuthors(),
            errors: {}
        };
    }

    componentWillMount() {
        const courseId = this.props.match.params.id;

        if (courseId) {
            this.setState({course: CourseStore.getCourseById(courseId) });
        }
    }

    setCourseState(event) {
        const field = event.target.name;
        const value = event.target.value;
        this.state.course[field] = value;
        this.setState({course: this.state.course});
    }

    onAuthorChange(event) {
        const value = _.find(this.state.authors, {id: event.target.value});
        this.state.course.author = {id: value.id, name: value.firstName + ' ' + value.lastName};
        this.setState({course: this.state.course});
    }

    courseFormIsValid() {
        let formIsValid = true;
        this.state.errors = {};

        if (this.state.course.author.id.length < 3) {
            this.state.errors.author = 'Must select valid author';
            formIsValid = false;
        }

        if (this.state.course.author.name.length < 3) {
            this.state.errors.lastName = 'Must select valid author';
            formIsValid = false;
        }

        if (this.state.course.title.length < 3) {
            this.state.errors.title = 'Title must be at least 3 characters';
            formIsValid = false;
        }

        if (this.state.course.category.length < 3) {
            this.state.errors.category = 'Category must be at least 3 characters';
            formIsValid = false;
        }

        if (this.state.course.length.length < 2) {
            this.state.errors.length = 'Length must be at least 2 digits';
            formIsValid = false;
        }

        this.setState({errors: this.state.errors });
        return formIsValid;
    }

    saveCourse(event) {
        event.preventDefault();

        if (this.state.course.author.id === '') {
            const value = this.state.authors[0];
            this.state.course.author = {id: value.id, name: value.firstName + ' ' + value.lastName};
            this.setState({course: this.state.course});
        }

        if (!this.courseFormIsValid()) {
            return;
        }

        if (this.state.course.id) {
            CourseActions.updateCourse(this.state.course);
        } else {
            CourseActions.createCourse(this.state.course);
        }

        toastr.success('Author Saved!');
        this.props.history.push('/courses');
    }

    render() {
        return (
            <Route render={({history}) => (<CourseForm title={this.state.course.title}
                                                       author={this.state.course.author}
                                                       authors={this.state.authors}
                                                       category={this.state.course.category}
                                                       length={this.state.course.length}
                                                       onChange={this.setCourseState.bind(this)}
                                                       onAuthorChange={this.onAuthorChange.bind(this)}
                                                       onSave={this.saveCourse.bind(this)}
                                                       errors={this.state.errors} />)} />
        );
    }
}

module.exports = ManageCoursePage;