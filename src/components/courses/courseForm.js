"use strict";

const React = require('react');
const Input = require('../common/textInput');
const DropDown = require('../common/dropDown');

class CourseForm extends React.Component {

    convertToOptions(authors) {
        let options = [];
        for(let i = 0; i < authors.length; i += 1 ) {
            options[i] = {
                id: authors[i].id,
                text: authors[i].firstName + ' ' + authors[i].lastName
            }
        }
        return options;
    }

    render() {
        return (
          <form>
              <h1>Manage Courses</h1>
              <Input name="title"
                     label="Title"
                     value={this.props.title}
                     onChange={this.props.onChange}
                     error={this.props.errors.title} />
              <DropDown name="author"
                        label="Author"
                        options={this.convertToOptions(this.props.authors)}
                        value={this.props.author.id}
                        onChange={this.props.onAuthorChange}
                        error={this.props.errors.author} />
              <Input name="category"
                     label="Category"
                     value={this.props.category}
                     onChange={this.props.onChange}
                     error={this.props.errors.category} />

              <Input name="length"
                     label="Length"
                     value={this.props.length}
                     onChange={this.props.onChange}
                     error={this.props.errors.length} />
              <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
          </form>
        );
    }
}

module.exports = CourseForm;