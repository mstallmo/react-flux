"use strict";

const React = require('react');
const Link = require('react-router-dom').Link;

const NotFoundPage = () => {
    return(
        <div>
            <h1>Page Not Found</h1>
            <p>Whoops! Sorry, there's nothing to see here</p>
            <p><Link to="/">Back to Home</Link></p>
        </div>
    );
};

module.exports = NotFoundPage;