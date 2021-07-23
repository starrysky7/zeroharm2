import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from './pages/landing/landing';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
