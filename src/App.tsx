import React from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import HotelDetailPage from './components/HotelDetailPage/HotelDetailPage';
import BookPage from './components/BookPage/BookPage';

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <div className="App">
        <h1>{t('header')}</h1>
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
      </Switch>
    </Router>
  );
}

export default App;
