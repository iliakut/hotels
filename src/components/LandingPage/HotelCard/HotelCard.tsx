import React, { FC } from 'react';
import { HotelInterface } from '../../../lib/types/types';
import style from './HotelCard.module.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import StarsRating from '../../UI/StarsRating/StarsRating';
import PriceCategoryComponent from '../../UI/PriceCategory/PriceCategoryComponent';
import LinkStyled from '../../UI/LinkStyled/LinkStyled';

const HotelCard: FC<{ hotel: HotelInterface }> = (props) => {
  const { t } = useTranslation();
  const description = props.hotel.description.length > 90
    ? `${props.hotel.description.slice(0, 90)}...`
    : props.hotel.description;

  return (
    <section className={style.card}>
      <img
        loading="lazy"
        className={style.image}
        src={props.hotel.images[0]}
        alt={t('imgAlt')}/>
      <div className={style.infoContainer}>
        <div className={style.infoContainer__headerAndDescription}>
          <h2 className={style.infoContainer__header}>{props.hotel.name}</h2>
          <p className={style.infoContainer__description}>{description}</p>
        </div>
        <div className={style.infoContainer__additionalAndBtn}>
          <div className={style.infoContainer__additionalInfo}>
            <StarsRating rating={props.hotel?.rating || 0}/>
            <p>
              {t('distanceToVenue')} {props.hotel.distance_to_venue} {t('distanceUnit')}
            </p>
            <p>{t('priceCategory')}
              <PriceCategoryComponent category={props.hotel.price_category}/>
            </p>
          </div>
          <div className={style.infoContainer__button}>
            <LinkStyled
              to={`/hotel/${props.hotel.id}`}>
              {t('hotelLink')}
            </LinkStyled>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelCard;