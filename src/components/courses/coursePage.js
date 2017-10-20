"use strict";

const React = require('react');
const Link = require('react-router-dom').Link;
const CourseList = require('./courseList');

class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.state = { courses: [
            {
                id: 1,
                title: "Test Course",
                author:
                    {
                        id: 'cory-house',
                        firstName: 'Cory',
                        lastName: 'House'
                    },
                category: "Test",
                length: "3:10"
            }
        ]
        }
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