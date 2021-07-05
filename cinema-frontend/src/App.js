import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/home/Home';
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

        </Route>
        <Route path="/classifications">
          <Classifications />
        </Route>
        <Route path="/gettingthere">

        </Route>
        <Route path="/placestogo">

        </Route>
        <Route path="/discussion">

        </Route>
      </Switch>
    </Router >
  );
}

export default App;
