import './App.css';
//MaterialUI Comopnents
import Buttons from './components/Buttons'
import Checkboxes from './components/Checkboxes';
import Inputs from './components/Inputs';
import StyledButtons from './components/StyledButtons';
import { ThemeProvider, createMuiTheme, Typography } from '@material-ui/core';
import { blue, orange } from '@material-ui/core/colors'
import 'fontsource-roboto';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: "2em",
      fontWeight: "bold"
    },
    h2: {
      fontSize: "1.2em"
    }
  },
  palette: {
    primary: {
      main: orange[500]
    },
    secondary: {
      main: blue[800]
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>

      <div className="App">
        <header className="App-header">
          <h1>Welcome to MUI</h1>
          <Typography variant="h1">
            Welcome to MUI
          </Typography>

          <Typography variant="h2" component="h1">
            Welcome to MUI
          </Typography>
          <Typography variant="h4">
            Learn how to use material-ui
          </Typography>
          <Buttons />
          <Checkboxes />
          <Inputs />
          <StyledButtons />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
