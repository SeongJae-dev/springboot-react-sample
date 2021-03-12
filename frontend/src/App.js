import logo from './logo.svg';
import './App.css';
import ApiComponent from "./component/ApiComponent.";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ApiComponent/>
      </header>
    </div>
  );
}

export default App;
