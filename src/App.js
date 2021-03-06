import logo from './logo.svg';
import './App.css';
//MaterialUI Comopnents
import Buttons from './components/Buttons'
import Checkboxes from './components/Checkboxes';
import Inputs from './components/Inputs';

function App() {
  const style = {
    fontSize: "1.2em"
  }
  return (
    <div className="App">
      <header className="App-header">
        <Buttons />
        <Checkboxes />
        <Inputs />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
