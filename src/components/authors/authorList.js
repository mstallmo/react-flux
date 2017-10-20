"use strict";

const React = require('react');
const Link = require('react-router-dom').Link;
const AuthorActions = require('../../actions/authorActions');
const toastr = require('toastr');

const AuthorList = (props) => {
    const deleteAuthor = (id, event) => {
        event.preventDefault();
        AuthorActions.deleteAuthor(id);
        toastr.success('Author Deleted');
    };

    const createAuthorRow = function(author) {
        return (
            <tr key={author.id}>
                <td><a href="#" onClick={deleteAuthor.bind(this, author.id)}>Delete</a></td>
                <td><Link to={`/author/${author.id}`}>{author.id}</Link></td>
                <td>{author.firstName} {author.lastName}</td>
            </tr>
        );
    };

    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th></th>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                    {props.authors.map(createAuthorRow, this)}
                </tbody>
            </table>
        </div>
    );
};

module.exports = AuthorList;