"use strict";

const React = require('react');

class Home extends React.Component {
    render() {
        return (
          <div className='jumbotron'>
            <h1>Pluralsight Adminsitration</h1>
              <p>
                  React, React Router, and Flux for ultra-responsive web apps.
              </p>
          </div>
        );
    }
}

module.exports = Home;