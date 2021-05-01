import React, { FC } from 'react';
import { RoomInterface } from '../../../lib/types/types';
import style from './RoomCard.module.css';
import { useTranslation } from 'react-i18next';

const RoomCard: FC<{ room: RoomInterface }> = (props) => {
  const { t } = useTranslation();

  return (
    <div className={style.card}>
      <h4>{props.room.name}</h4>
      <p>{props.room.description}</p>
      <p><b>{t('maxOccupancy')}:</b> {props.room.max_occupancy}</p>
      <p><b>{t('roomPrice')}:</b> {props.room.price_in_usd}</p>
    </div>
  );
};

export default RoomCard;