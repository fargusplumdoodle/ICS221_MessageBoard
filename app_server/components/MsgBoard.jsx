const React = require('react');
const MsgList = require('./MsgList.jsx');

class MsgBoard extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			messages: this.props.messages,
		}
	}

	render(){
	    return (
	    	<MsgList messages={this.state.messages}/>
		)
	}
}

module.exports = MsgBoard;
