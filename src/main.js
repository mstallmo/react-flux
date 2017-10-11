$ = jQuery = require('jquery');
const React = require('react');
const ReactDOM = require('react-dom');
const Home = require('./components/homePage');
const About = require('./components/about/aboutPage');
const Header = require('./components/common/header');

class App extends React.Component {
    render() {
        let Child;

        switch(this.props.route) {
            case 'about':
                Child = About;
                break;
            default:
                Child = Home;
                break;
        }

        return (
            <div>
                <Header />
                <Child />
            </div>
        );
    }
}

function render () {
    const route = window.location.hash.substr(1);

    ReactDOM.render(<App route={route} />, document.getElementById('app'));
}

window.addEventListener('hashchange', render);
render();