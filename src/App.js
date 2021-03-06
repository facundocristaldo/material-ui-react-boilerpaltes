import logo from './logo.svg';
import './App.css';
//MaterialUI Comopnents
import Buttons from './components/Buttons'

function App() {
  const style = {
    fontSize: "1.2em"
  }
  return (
    <div className="App">
      <header className="App-header">
        <Buttons />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
