import logo from './logo.svg';
import './App.css';
import MobileLegend from './img/Mobile_Legend.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Welcome To Mobile Legend </h1>
        <img src={MobileLegend} classname="App-logo" alt="MobileLegend"/>
        <h3>Marcellino Fadhilah Utomo</h3>
        <h4>Kelompok Microsoft</h4>
        <p>Mobile Legend is a 5 vs 5 strategy game created by Moonton</p>
        <a href="https://m.mobilelegends.com/en">Go To Website Mobile Legend</a>
      </header>
    </div>
  );
}

export default App;
