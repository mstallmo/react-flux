"use strict";

const React = require('react');
const Link = require('react-router-dom').Link;
const CourseStore = require('../../stores/courseStore');
const CourseList = require('./courseList');

class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.state = { courses: CourseStore.getAllCourses() };
    }

    componentWillMount() {
        CourseStore.addChangeListener(() => this._onChange());
    }

    componentWillUnmount() {
        CourseStore.removeChangeListener(() => this._onChange());
    }

    _onChange() {
        this.setState({ courses: CourseStore.getAllCourses() });
    }

    render() {
        return (
          <div>
              <h1>Courses</h1>
              <Link to="/course" className="btn btn-default">Add Course</Link>
              <CourseList courses={this.state.courses}/>
          </div>
        );
    }
}

module.exports = Courses;