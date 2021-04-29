import React, { FC } from 'react';
import { HotelInterface } from '../../../lib/types/types';
import style from './HotelCard.module.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HotelCard: FC<{ hotel: HotelInterface }> = (props) => {
  const { t } = useTranslation();
  const desctiption = props.hotel.description.length > 200
    ? `${props.hotel.description.slice(0, 190)}...`
    : props.hotel.description;

  return (
    <div className={style.card}>
      <h2>{props.hotel.name}</h2>
      <p className={style.description}>{desctiption}</p>
      <p>{t('rating')} {props.hotel.rating}</p>
      <Link to={'/'}>{t('hotelLink')}</Link>
    </div>
  );
};

export default HotelCard;