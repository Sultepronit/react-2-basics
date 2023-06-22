/*import logo from './logo.svg';*/
import './App.css';
import Header from './Header';
import Contents from './Contents';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Contents />
      <Footer />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>

        <p>[1, 2, 3]</p>
        <p>{[1, 2, 3]}</p>
      </header> */}
    </div>
  );
}

export default App;
