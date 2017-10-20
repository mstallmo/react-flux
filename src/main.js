"use strict";
const React = require('react');
const ReactDOM = require('react-dom');
const HashRouter = require('react-router-dom').HashRouter;
const App = require('./components/app');
const InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();

ReactDOM.render((
    <HashRouter>
        <App />
    </HashRouter>), document.getElementById('app'));