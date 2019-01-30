'use strict';

const React = require('react');
const ReactDOMServer = require('react-dom/server');

//transpile and add react component
require("@babel/register") ({
	presets: [ '@babel/preset-react' ]
});
const About = React.createFactory(require('../components/About.jsx'));

// index handler
const index = (req, res)  => {
	res.send('Hello!');
}

// about handler
const  about = (req, res) => {
	const aboutHTML = ReactDOMServer.renderToString(About(
	     { links: [ 'https://reactjs.org/', 'https://nodejs.org/','https://expressjs.com/' ] }
   ));
   res.render('about', { title: 'About', about: aboutHTML } );
 };

module.exports = {
	index,
	about

};
