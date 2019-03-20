const React = require('react');

const MsgList= (props) => {
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
            {props.messages.map((message, index)=>
                <tr key={message._id}>
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
