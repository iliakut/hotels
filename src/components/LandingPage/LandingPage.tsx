import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectHotels } from '../../app/hotelsSlice';
import HotelCard from './HotelCard/HotelCard';
import style from './LandingPage.module.css';
import useGetHotels from '../../lib/customHooks/useGetHotels';

const LandingPage = () => {
  useGetHotels();
  const hotels = useAppSelector(selectHotels);


  return (
    <article className={style.container}>
      {hotels.map(hotel => {
        return (<HotelCard key={hotel.id} hotel={hotel}/>)
      })}
    </article>
  );
};

export default LandingPage;