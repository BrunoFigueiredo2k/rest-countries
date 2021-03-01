import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import CountryPage from './pages/CountryPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/country" component={CountryPage}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
