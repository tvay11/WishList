import logo from './logo.svg';
import './App.css';
import SignIn from "./SignIn";
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from "./Home"
import SignUp from "./SignUp";
function App() {

  return (
      <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
      <Route exact path="/SignUp">
        <SignUp></SignUp>
      </Route>
      <Route exact path="/SignIn">
        <SignIn></SignIn>
      </Route>
    </div>
      </Router>
  );
}

export default App;
