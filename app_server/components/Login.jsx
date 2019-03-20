const React = require('react');

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.login = this.login.bind(this);
        this.handleText = this.handleText.bind(this);
        this.register = this.register.bind(this);

        this.state = {
            email: '',
            password: ''
        }
    }
    register(event){
        console.log('Registration button pushed on login component');
        this.props.registerCallback();
    }

    login(event) {
        event.preventDefault();
        // pass control to MsgBoard and send
        // the email and pass the user entered
        this.props.loginCallback({
            email: this.state.email,
            password: this.state.password
        });
    }

    handleText(event) {
        if (event.target.id === 'email') {
            this.setState({
                email: event.target.value
            });
        } else {
            this.setState({
                password: event.target.value
            });
        }
    }

    render() {
        return (
            <div>
           <form onSubmit={this.login}>
               <h4>Log in to post a message:</h4>
               <div className="row">
                   <label htmlFor="email"
                          className="col-3 col-form-label">
                       Email:
                   </label>
                   <label htmlFor="password"
                          className="col-7 col-form-label">
                       Password:
                   </label>
               </div>
               <div className="row">
                   <div className="col-3">
                       <input id="email" type="text" className="form-control"
                              placeholder=" enter email" value={this.state.email}
                              onChange={this.handleText}
                       />
                   </div>
                   <div className=" col-7">
                       <input id=" password" type="password" className=" form-control"
                              placeholder=" enter password" value={this.state.password}
                              onChange={this.handleText}
                       />
                   </div>
                   <div className=" col-2">
                       <button type=" submit" className=" btn btn-primary">
                           Log In
                       </button>
                   </div>

                   </div>
           </form>

            <div className="col-8">
                <p>Not registered?</p>
                <button type="register" className=" btn btn-primary"
                    onClick={this.register}>
                Register
            </button>
            </div>
                <br/>
    </div>
        )
    }
}

module.exports = Login;
