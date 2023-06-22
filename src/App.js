import logo from './logo.svg';
import './App.css';

function App() {
  const returnRandomInt = () => {
    return Math.floor(Math.random() * 1000);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>

        <p>[1, 2, 3]</p>
        <p>{[1, 2, 3]}</p>
        <p>1 + 2</p>
        <p>{1 + 2}</p>
        <p>Here's your random number: {returnRandomInt()}</p>
      </header>
    </div>
  );
}

export default App;
