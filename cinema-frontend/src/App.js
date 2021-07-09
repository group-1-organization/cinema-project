import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

import Home from './components/Home';
import GettingThere from './components/getting-there/GettingThere';
import Screens from './components/Screens';
import Opening from './components/Opening';
import AboutUs from './components/AboutUs';
import Classifications from './components/Classifications';
import Footer from './components/Footer';
import Listings from './components/listings/Listings';
import Places from './components/placestogo/Places';
import Bookings from './components/bookings/Bookings'
import NewListings from './components/UpComing/NewListings';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div class='page-container'>
      <div class='content-wrap'>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/listing">
              <Listings />
            </Route>
            <Route path="/upcoming">
              <NewListings />
            </Route>
            <Route path="/bookings">
              <Bookings />

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
              <Places />
            </Route>
            <Route path="/discussion">

            </Route>
            <Route path="/screens">
              <Screens />
            </Route>
            <Route path="/aboutus">
              <AboutUs />
            </Route>
            <Route path="/contact">
              <ContactUs />
            </Route>
          </Switch>
        </Router >
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default App;
