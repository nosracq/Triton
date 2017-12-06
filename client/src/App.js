
import React, { Component } from 'react'

// Theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightBlue900 } from 'material-ui/styles/colors';

import Navbar from './components/Navbar.js';

// Theme
const muiTheme = getMuiTheme({
    palette: {
      accent1Color: lightBlue900
    },
    appBar: {
        // can insert styling for app bar here
    },
  })

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Navbar />
        {/* <div className="App">
          <p>Welcome!</p>
        </div> */}
      </MuiThemeProvider>
    );
  }
}

export default App;
