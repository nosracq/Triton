import React, {Component} from 'react';
import { GoogleLogin } from 'react-google-login-component';

class GLogin extends Component{

  // constructor (props, context) {
  //   super(props, context);
  // }

  responseGoogle (googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    console.log({accessToken: id_token});
    //anything else you want to do(save to localStorage)...
  }

  render () {
    return (
      <div>
        <GoogleLogin socialId="837699017775-gl7kpej7moujda6aci348pa74rvolq8c.apps.googleusercontent.com"
                     className="google-login"
                     scope="profile"
                     fetchBasicProfile={false}
                     responseHandler={this.responseGoogle}
                     buttonText="Login With Google"/>
      </div>
    );
  }

}

export default GLogin;
