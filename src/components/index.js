"use strict";

const React = require('react');
const Route = require('react-router').Route;
const Switch = require('react-router-dom').Switch;
const Home = require('./homePage');
const About = require('./about/aboutPage');
const Authors = require('./authors/authorPage');
const ManageAuthors = require('./authors/manageAuthorPage');
const Courses = require('./courses/coursePage');
const ManageCourses = require('./courses/manageCoursePage');
const NotFound = require('./notFoundPage');

const Index = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/authors" component={Authors} />
        <Route exact path="/author" component={ManageAuthors} />
        <Route path="/author/:id" component={ManageAuthors} />
        <Route path="/courses" component={Courses} />
        <Route exact path="/course" component={ManageCourses} />
        <Route path="/course/:id" component={ManageCourses} />
        <Route component={NotFound} />
    </Switch>

);

module.exports = Index;
