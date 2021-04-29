import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectCurrentHotel } from '../../app/hotelsSlice';
import { selectRooms } from '../../app/roomsSlice';
import useGetHotel from '../../lib/customHooks/useGetHotel';
import useGetRooms from '../../lib/customHooks/useGetRooms';

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

  return (
    <article>
      <h1>{hotel?.name}</h1>
      <p>{hotel?.description}</p>
      <p>{hotel?.distance_to_venue}</p>
      <p>{hotel?.rating}</p>
      <p>{hotel?.price_category}</p>
      <p>{hotel?.amenities}</p>
      <p>{hotel?.images}</p>
    </article>
  );
};

export default HotelDetailPage;