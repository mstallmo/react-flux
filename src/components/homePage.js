"use strict";

const React = require('react');
const Link = require('react-router-dom').Link;

class Home extends React.Component {
    render() {
        return (
          <div className='jumbotron'>
            <h1>Pluralsight Adminsitration</h1>
              <p>React, React Router, and Flux for ultra-responsive web apps.</p>
              <Link to="/about" className="btn btn-primary btn-lg">Learn More</Link>
          </div>
        );
    }
}

module.exports = Home;