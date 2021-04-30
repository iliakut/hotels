import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectCurrentHotel } from '../../app/hotelsSlice';
import { selectRooms } from '../../app/roomsSlice';
import useGetHotel from '../../lib/customHooks/useGetHotel';
import useGetRooms from '../../lib/customHooks/useGetRooms';
import style from './HotelDetailPage.module.css';
import StarsRating from '../UI/StarsRating/StarsRating';

const HotelDetailPage = () => {
  const params = useParams<{ id: string }>();
  useGetHotel(params.id);
  useGetRooms(params.id);
  const hotel = useAppSelector(selectCurrentHotel);
  const rooms = useAppSelector(selectRooms);
  /*
  name: string
  description: string
  distance_to_venue: number
  rating: ratingType
  price_category: 'low' | 'medium' | 'high'
  amenities: amenitiesType[]
  images: string[]
  rooms: string[]
  * */
  // {hotel?.rating}

  return (
    <article className={style.container}>
      <h1 className={style.header}>{hotel?.name}</h1>
      <StarsRating rating={hotel?.rating || 0}/>
      <p>{hotel?.description}</p>
      <p>{hotel?.distance_to_venue}</p>
      <p>{hotel?.price_category}</p>
      <p>{hotel?.amenities}</p>
      <p>{hotel?.images}</p>
    </article>
  );
};

export default HotelDetailPage;