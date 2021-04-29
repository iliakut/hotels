import React from 'react';
import useGetHotels from '../../lib/customHooks/useGetHotels';
import { useAppSelector } from '../../app/hooks';
import { selectHotels } from '../../app/hotelsSlice';
import HotelCard from './HotelCard/HotelCard';
import style from './LandingPage.module.css';

const LandingPage = () => {
  useGetHotels();
  const hotels = useAppSelector(selectHotels);
  console.log(hotels)

  return (
    <article className={style.container}>
      {hotels.map(hotel => {
        return (<HotelCard key={hotel.id} hotel={hotel}/>)
      })}
    </article>
  );
};

export default LandingPage;