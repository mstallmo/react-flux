"use strict";

const React = require('react');
const Link = require('react-router-dom').Link;

const CourseList = (props) => {
    const createCourseRow = (course) => {
        return(
          <tr key={course.id}>
              <td><a href="#">Watch</a></td>
              <td><a href="#">Delete</a></td>
              <td><Link to={`/courses/${course.id}`}>{course.title}</Link></td>
              <td>{course.author.firstName} {course.author.lastName}</td>
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