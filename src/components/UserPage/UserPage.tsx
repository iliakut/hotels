import React from 'react';
import style from './UserPage.module.css';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../app/hooks';
import { selectHotels } from '../../app/hotelsSlice';

const UserPage = () => {
  const { t } = useTranslation();
  const hotels = useAppSelector(selectHotels);
  let roomsNumber = 0;
  hotels.forEach(hotel => {
    roomsNumber += hotel.rooms.length;
  })

  return (
    <div className={style.container}>
      <h3>{t('administrativeInfo')}</h3>
      <p>{t('totalNumberOfHotels')}: {hotels.length}</p>
      <p>{t('totalNumberOfRooms')}: {roomsNumber}</p>
    </div>
  );
};

export default UserPage;