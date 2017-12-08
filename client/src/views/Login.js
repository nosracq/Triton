import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import './login.css'

class Login extends Component {

    constructor (props) {
      super(props)
      this.state = {
          username: '',
          password: ''
      }
    }

    handleSubmit = () => {}

    handleRegister = () => {}

    render() {
        return (
            <div className='loginPage'>
                <div>
                    <TextField
                        hintText="Enter username"
                        floatingLabelText="Username"
                        onChange={(event, newValue) => this.setState({ username: newValue })}
                    />
                </div>
                <div>
                    <TextField
                        hintText="Enter password"
                        floatingLabelText="password"
                        onChange={(event, newValue) => this.setState({ password: newValue })}
                    />
                </div>
                <RaisedButton
                    label="Submit"
                    primary={ true }
                    onClick={ this.handleSubmit }
                    style={ style }
                />
                <RaisedButton
                    label="Register"
                    primary={ true }
                    onClick={ this.handleRegister }
                    style={ style }
                />
            </div>
        )
    }

}
const style = {
    margin: 15,
   }
export default Login;
