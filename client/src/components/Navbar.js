import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
//import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
//import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Drawer from 'material-ui/Drawer';

// Router
import { BrowserRouter, Route, Link } from 'react-router-dom'

// Views
//import GLogin from '../views/GLogin'
import Login from '../views/Login'

class LoginBtn extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <Link to='/login'><FlatButton {...this.props} label="Login" /></Link>
    );
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

Logged.muiName = 'IconMenu';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            logged: false,
        }
      }

//   handleChange = (event, logged) => {
//     this.setState({logged: logged});
//   };

  handleLogin = () => {this.setState({ logged: !this.state.logged })}

  handleClose = () => { this.setState({ open: false })}

  render() {
    return (
        <BrowserRouter>
            <div>
                <AppBar
                    title="Tritan"
                    iconElementRight={ this.state.logged ? <Logged /> : <LoginBtn /> }
                    onLeftIconButtonClick={ () => this.setState({ open: !this.state.open }) }
                    onRightIconButtonClick={ this.handleLogin }
                />
                <Drawer
                    open={ this.state.open }
                    docked={ false }
                    width={ 200 }
                    onRequestChange={ (open) => this.setState({ open }) }>
                    <Link to='/'><MenuItem onClick={ this.handleClose }>Home</MenuItem></Link>
                    <Link to='/about'><MenuItem onClick={ this.handleClose }>About</MenuItem></Link>
                </Drawer>

                <Route exact path='/' render={ () => <h1>Home</h1> } />
                <Route exact path='/about' render={ () => <h1>About</h1> } />
                <Route exact path='/login' render={ () => <Login logged={this.state.logged}/> } />

            </div>
        </BrowserRouter>
    );
  }
}

export default Navbar;
