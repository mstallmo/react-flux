"use strict";

const React = require('react');
const Link = require('react-router-dom').Link;
const CourseActions = require('../../actions/courseActions');
const toastr = require('toastr');

const CourseList = (props) => {
    const deleteCourse = (id, event) => {
        event.preventDefault();
        CourseActions.deleteCourse(id);
        toastr.success('Course Deleted');
    };

    const createCourseRow = (course) => {
        return(
          <tr key={course.id}>
              <td><a href="#">Watch</a></td>
              <td><a href="#" onClick={deleteCourse.bind(this, course.id)}>Delete</a></td>
              <td><Link to={`/course/${course.id}`}>{course.title}</Link></td>
              <td>{course.author.name}</td>
              <td>{course.category}</td>
              <td>{course.length}</td>
          </tr>
        );
    };

    return (
      <div>
          <table className="table">
              <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>
                </tr>
              </thead>
              <tbody>
                {props.courses.map(createCourseRow, this)}
              </tbody>
          </table>
      </div>
    );
};

module.exports = CourseList;