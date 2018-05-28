import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import injectTapEventPluginRequire = require("react-tap-event-plugin");

const theme = createMuiTheme({
  overrides: {
    MuiInput: { 
      root: { // Name of the rule
        color: 'cadetblue',
        borderColor: 'cadeblue'
      },
    }
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#6D9C9F',
    }
  }
});

class App extends React.Component<{},{}> {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Input color={'cadetblue'} />
      </MuiThemeProvider>
    )
  }
}

export default App;
