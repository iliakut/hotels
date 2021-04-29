import React from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';

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
      </Switch>
    </Router>
  );
}

export default App;
