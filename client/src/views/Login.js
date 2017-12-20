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

    handleSubmit = () => {
        // var myHeaders = new Headers({
        //     'Content-Type': 'application/json',
        //     'Accept': 'application/json'
        //   });
        // var pWord = this.state.password
        // var uName = this.state.username
        fetch('http://localhost:3001/api/login', {
            method: 'POST',
            // headers: myHeaders,
            // mode: 'no-cors',
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
                // test: 'bodyTest'
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res) => {
            // if (res.status === 200) this.props.logged = true
            if (res.ok) {
                console.log('got good response')
            }
            else {
                console.log('something went wrong')
            }
        })
    }

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
