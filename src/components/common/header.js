"use strict";

const React = require('react');
const Link = require('react-router-dom').Link;

class Header extends React.Component {
    render() {
        return (
          <nav className="navbar navbar-default">
              <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src="images/pluralsight-logo.png" />
                </Link>
                <ul className="nav navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/authors">Authors</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                </ul>
              </div>
          </nav>
        );
    }
}

module.exports = Header;