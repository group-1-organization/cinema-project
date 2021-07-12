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

import Discussion from './components/discussion-board/Discussion';
import Topic from './components/discussion-board/Topic';

import Places from './components/placestogo/Places';
import Bookings from './components/bookings/Bookings'
import SearchPage from './components/SearchPage';
import NewListings from './components/UpComing/NewListings';
import Movie from './components/listings/Movie';
import ContactUs from './components/ContactUs';
import { useState } from 'react';


const Manager = () => {

    const [time, setTime] = useState("");
    const [title, setTitle] = useState("-")
    return (
        <div class='page-container'>
            <Router>
                <div class='content-wrap'>
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
                        <Route path="/bookings" >
                            <Bookings time={time} title={title} />
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
                            <Discussion />
                        </Route>
                        <Route path="/screens">
                            <Screens />
                        </Route>
                        <Route path="/aboutus">
                            <AboutUs />
                        </Route>
                        <Route path="/movie/:title" >
                            <Movie setTime={setTime} setTitle={setTitle} />
                        </Route>
                        <Route path="/contact">
                            <ContactUs />
                        </Route>
                        <Route path="/topic/:id" >
                            <Topic />
                        </Route>
                        <Route path="/search/:query">
                            <SearchPage />
                        </Route>
                    </Switch>
                </div>
                <br />
                <Footer />
            </Router >

        </div>
    );
}


export default Manager;