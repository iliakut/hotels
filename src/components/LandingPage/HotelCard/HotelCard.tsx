import React, { FC } from 'react';
import { HotelInterface } from '../../../lib/types/types';
import style from './HotelCard.module.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import StarsRating from '../../UI/StarsRating/StarsRating';
import PriceCategoryComponent from '../../UI/PriceCategory/PriceCategoryComponent';

const HotelCard: FC<{ hotel: HotelInterface }> = (props) => {
  const { t } = useTranslation();
  const description = props.hotel.description.length > 150
    ? `${props.hotel.description.slice(0, 150)}...`
    : props.hotel.description;

  return (
    <section className={style.card}>
      <h3>{props.hotel.name}</h3>
      <img
        loading="lazy"
        className={style.image}
        src={props.hotel.images[0]}
        alt={t('imgAlt')}/>
      <p className={style.description}>{description}</p>
      <div className={style.info}>
        <StarsRating rating={props.hotel?.rating || 0}/>
        <p>
          {t('distanceToVenue')} {props.hotel.distance_to_venue}
        </p>
        <p>{t('priceCategory')}
          <PriceCategoryComponent category={props.hotel.price_category}/>
        </p>
      </div>
      <Link to={`/hotel/${props.hotel.id}`}>{t('hotelLink')}</Link>
    </section>
  );
};

export default HotelCard;