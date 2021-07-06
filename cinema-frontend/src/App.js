import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

import Home from './components/Home';
import GettingThere from './components/getting-there/GettingThere';
import Screens from './components/Screens';
import Opening from './components/Opening';
import AboutUs from './components/AboutUs';
import Classifications from './components/Classifications';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/listing">

        </Route>
        <Route path="/upcoming">

        </Route>
        <Route path="/bookings">

        </Route>
        <Route path="/openingtimes">
          <Opening />
        </Route>
        <Route path="/classifications">
          <Classifications />
        </Route>
        <Route path="/gettingthere">
          <GettingThere />
        </Route>
        <Route path="/placestogo">

        </Route>
        <Route path="/discussion">

        </Route>
        <Route path="/screens">
          <Screens />
        </Route>
        <Route path="/aboutus">
          <AboutUs />
    
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
