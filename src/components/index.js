"use strict";

const React = require('react');
const Route = require('react-router').Route;
const Switch = require('react-router-dom').Switch;
const Redirect = require('react-router-dom').Redirect;
const Home = require('./homePage');
const About = require('./about/aboutPage');
const Authors = require('./authors/authorPage');
const ManageAuthors = require('./authors/manageAuthorPage');
const NotFound = require('./notFoundPage');

const Index = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/authors" component={Authors} />
        <Route path="/author/:id" component={ManageAuthors} />
        <Route path="/author" component={ManageAuthors} />
        <Route component={NotFound} />
    </Switch>

);

module.exports = Index;
