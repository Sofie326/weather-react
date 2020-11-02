import logo from './logo.svg';
import './App.css';
import Search from "./Search";
import City from "./City";
import Info from "./Info";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Search />
      <City />
      <Info />
      <Forecast />
      <Footer />
      </header>
    </div>
  );
}

export default App;
