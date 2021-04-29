import React, { FC } from 'react';
import { HotelInterface } from '../../../lib/types/types';
import style from './HotelCard.module.css';

const HotelCard: FC<{ hotel: HotelInterface }> = (props) => {
  return (
    <div className={style.card}>
      <h2>{props.hotel.name}</h2>
      <h3>{props.hotel.description}</h3>
      <h4>{props.hotel.rating}</h4>
    </div>
  );
};

export default HotelCard;