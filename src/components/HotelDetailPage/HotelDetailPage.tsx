import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectCurrentHotel } from '../../app/hotelsSlice';
import { selectRooms } from '../../app/roomsSlice';
import useGetHotel from '../../lib/customHooks/useGetHotel';
import useGetRooms from '../../lib/customHooks/useGetRooms';
import style from './HotelDetailPage.module.css';
import StarsRating from '../UI/StarsRating/StarsRating';
import ImagesComponent from './ImagesComponent/ImagesComponent';
import { useTranslation } from 'react-i18next';
import RoomCard from './RoomCard/RoomCard';

const HotelDetailPage = () => {
  const params = useParams<{ id: string }>();
  useGetHotel(params.id);
  useGetRooms(params.id);
  const { t } = useTranslation();
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

  const amenitiesString = hotel?.amenities.join(' ');

  return (
    <article className={style.container}>
      <h2 className={style.header}>{hotel?.name}</h2>
      <StarsRating rating={hotel?.rating || 0}/>
      <hr/>
      <h3>{t('description')}</h3>
      <p>{hotel?.description}</p>
      <p><b>{t('distanceToVenue')}:</b> {hotel?.distance_to_venue} km</p>
      <p><b>{t('priceCategory')}:</b> {hotel?.price_category}</p>
      {
        amenitiesString &&
        <p>
          <b>{t('amenities')}:</b> {amenitiesString}
        </p>
      }
      <hr/>
      <h3>{t('rooms')}</h3>
      <div className={style.container__rooms}>
        {
          rooms.map((room) => (
            <RoomCard key={room.id} room={room}/>
          ))
        }
      </div>
      <hr/>
      <p><b>{t('hotelImages')}</b></p>
      <ImagesComponent images={hotel?.images || []}/>
    </article>
  );
};

export default HotelDetailPage;