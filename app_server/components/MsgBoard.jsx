const React = require('react');
const MsgList = require('./MsgList.jsx');
const NewMsg = require('./NewMsg.jsx');
const Login = require('./Login.jsx');

class MsgBoard extends React.Component {
    constructor(props) {
        super(props);
        this.addMessage = this.addMessage.bind(this);
        this.login = this.login.bind(this);
        this.state = {
            messages: this.props.messages,

            loginForm: true,
            loginAttempts: 3,
            loginFail: false,

            userCredentials: {
                email: '',
                password: ''
            }
        }
    }

    login(userCredentials) {
        // userCredentials is passed in from Login Component
        // For Basic Authentication it is username:password (but we're using email)
        const basicString = userCredentials.email + ':' + userCredentials.password;
        fetch(`${process.env.API_URL}/users/login`, {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + btoa(basicString)
            }
        })
            .then(response => {
                // No more login attempts, throw an error
                if (this.state.loginAttempts === 0) throw 'locked out';
                // OK response, credentials accepted
                if (response.status === 200) {
                    console.log("Successfull login");
                    this.setState({
                        userCredentials: userCredentials,
                        loginForm: false,
                        loginFail: false
                    });
                } else {
                    // Credentials are wrong
                    console.log("Login failed");
                    this.setState((state) => {
                        return ({
                            loginFail: true,
                            loginAttempts: state.loginAttempts - 1
                        });
                    });
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleHTTPErrors(response) {
        console.log('Response: ');
        console.log(response);
        if (!response.ok) throw Error(response.status + ': ' + response.statusText);
        return response;
    }

    componentDidMount() {
        fetch(`${process.env.API_URL}/msgs`)
            .then(response => this.handleHTTPErrors(response))
            .then(response => response.json())
            .then(result => {
                console.log('logging response from json server');
                console.log(result);
                this.setState({
                    messages: result
                });
            })
            .catch(error => {
                console.log('Fetch API Error: ' + error);
            });
    }

    addMessage(message) {
        const basicString = this.state.userCredentials.email + ':'
            + this.state.userCredentials.password;

        // update back-end data
        fetch(`${process.env.API_URL}/msgs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(basicString)
            },
            body: JSON.stringify(message)
        })
            .then(response => this.handleHTTPErrors(response))
            .then(result => result.json())
            .then(result => {
                console.log('before set state' + this.state.messages);
                this.setState({
                    messages:
                        [result].concat(this.state.messages)
                });
                console.log('after set state' + this.state.messages);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        let form;
        if (this.state.loginForm) {
            form = <Login registerCallback={this.register}
                          loginCallback={this.login}
                          loginFail={this.state.loginFail}
                          loginAttempts={this.state.loginAttempts}
            />
        } else {
            form = <NewMsg addMsgCallback={this.addMessage}/>
        }

        return (
            <div>
                {form}
                <MsgList messages={this.state.messages}/>
            </div>
        );
    }
}

module.exports = MsgBoard;
