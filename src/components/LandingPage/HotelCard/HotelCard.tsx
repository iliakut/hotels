import React, { FC } from 'react';
import { HotelInterface } from '../../../lib/types/types';
import style from './HotelCard.module.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HotelCard: FC<{ hotel: HotelInterface }> = (props) => {
  const { t } = useTranslation();

  // distance_to_venue: number
  // rating: ratingType
  // price_category: 'low' | 'medium' | 'high'
  const desctiption = props.hotel.description.length > 150
    ? `${props.hotel.description.slice(0, 150)}...`
    : props.hotel.description;

  return (
    <section className={style.card}>
      <h2>{props.hotel.name}</h2>
      <p className={style.description}>{desctiption}</p>
      <div className={style.info}>
        <p>{t('rating')} {props.hotel.rating}</p>
        <p>{t('rating')} {props.hotel.distance_to_venue}</p>
        <p>{t('rating')} {props.hotel.price_category}</p>
      </div>
      <Link to={'/'}>{t('hotelLink')}</Link>
    </section>
  );
};

export default HotelCard;