import logo from './logo.svg';
import './App.css';
//MaterialUI Comopnents
import Buttons from './components/Buttons'
import Checkboxes from './components/Checkboxes';
import Inputs from './components/Inputs';
import StyledButtons from './components/StyledButtons';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { blue, orange } from '@material-ui/core/colors'

const theme = createMuiTheme({
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
