$ = jQuery = require('jquery');
const React = require('react');
const Header = require('./common/header');
const Index = require('./index');

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <Index />
                </div>
            </div>
        );
    }
}

module.exports = App;