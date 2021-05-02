import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import HotelDetailPage from './components/HotelDetailPage/HotelDetailPage';
import BookPage from './components/BookPage/BookPage';
import UserInfo from './components/UserInfo/UserInfo';
import UserPage from './components/UserPage/UserPage';
import useGetHotels from './lib/customHooks/useGetHotels';
import Header from './components/UI/Header/Header';

function App() {
  useGetHotels();

  return (
    <Router>
      <div className="App">
        <UserInfo/>
        <Header/>
      </div>
      <Switch>
        <Route exact path="/">
          <LandingPage/>
        </Route>
        <Route exact path="/hotel/:id">
          <HotelDetailPage/>
        </Route>
        <Route exact path="/hotel/:id/:roomId">
          <BookPage/>
        </Route>
        <Route exact path="/user">
          <UserPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
