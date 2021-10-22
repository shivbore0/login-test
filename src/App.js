import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Task from './components/Task';
import User from './components/User';
import Loginform from './components/Loginform';
import Changingpassword from './components/Changingpassword';

function App() {
  return (
    <div className="App">
     <Router>
     <Navigation logo="Machine"/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/loginform">
            <Loginform/>
          </Route>
          <Route exact path="/task">
            <Task/>
          </Route>
          <Route exact path="/user">
            <User/>
          </Route>
          <Route exact path="/changingpassword">
            <Changingpassword/>
          </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
