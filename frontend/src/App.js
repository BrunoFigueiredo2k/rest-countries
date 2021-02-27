import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import Header from './components/Header';
import Filterbar from './components/Filterbar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Filterbar />
        <h1 className="mt-5">Hello</h1>
      </div>
    </div>
  );
}

export default App;
