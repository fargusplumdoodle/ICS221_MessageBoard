const React = require('react');

const MsgList= (props) => {
    props.messages.reverse().map( (message, index ) =>
        console.log(message.name + '     ' + index)
    );
    return (
        <table className="table table-striped table-bordered">
            <thread>
                <tr>
                    <th className="w-25">id</th>
                    <th className="w-25">Name</th>
                    <th className="w-50">Message</th>
                </tr>
            </thread>
            <tbody>
            {props.messages.reverse().map((message, index)=>
                <tr key={message.id}>
                    <td>{index + 1}</td>
                    <td>{message.name}</td>
                    <td>{message.msg}</td>
                </tr>
            )}
            </tbody>
        </table>
	);
};

module.exports = MsgList;
/*


 */
