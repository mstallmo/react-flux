"use strict";

const React = require('react');
const Input = require('../common/textInput');
const DropDown = require('../common/dropDown');

class CourseForm extends React.Component {
    render() {
        return (
          <form>
              <h1>Manage Courses</h1>
              <Input name="title"
                     label="Title"
                     value={this.props.title}
                     onChange={this.props.onTitleChange}
                     error={this.props.errors.title} />
              <DropDown name="author"
                        label="Author"
                        authors={this.props.authors}
                        value={this.props.author}
                        onChange={this.props.onAuthorChange}
                        error={this.props.errors.author} />
              <Input name="category"
                     label="Category"
                     value={this.props.category}
                     onChange={this.props.onCategoryChange}
                     error={this.props.errors.category} />

              <Input name="length"
                     label="Length"
                     value={this.props.length}
                     onChange={this.props.onLengthChange}
                     error={this.props.errors.length} />
          </form>
        );
    }
}

module.exports = CourseForm;