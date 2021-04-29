import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import HotelService from './services/HotelService';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  const hotels = HotelService.getHotels();


  return (
    <div className="App">
      <h1>{t('header')}</h1>
    </div>
  );
}

export default App;
