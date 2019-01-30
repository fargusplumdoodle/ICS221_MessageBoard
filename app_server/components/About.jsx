const React = require('react');

const About = (props) => {
	return (
	<h2>This is a <a href={props.links[0]}>React</a> Component generated on the server and deliveredvia <a href={props.links[1]}>Node.js</a> and <a href={props.links[2]}>express</a>!
	</h2>
	);
}

module.exports = About
