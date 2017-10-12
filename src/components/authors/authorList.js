"use strict";

const React = require('react');
const Link = require('react-router-dom').Link;

const AuthorList = (props) => {
    const createAuthorRow = function(author) {
        return (
            <tr key={author.id}>
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