import React, { FC } from 'react';
import { RoomInterface } from '../../../lib/types/types';
import style from './RoomCard.module.css';
import { useTranslation } from 'react-i18next';
import StarsRating from '../../UI/StarsRating/StarsRating';
import LinkStyled from '../../UI/LinkStyled/LinkStyled';

const RoomCard: FC<{ room: RoomInterface, hotelId: string }> = (props) => {
  const { t } = useTranslation();
  const buttonText = props.room.available ? t('roomAvailable') : t('roomUnavailable');

  return (
    <div className={style.card}>
      <div>
        <p className={style.card__headerText}>{props.room.name}</p>
        <h4 className={style.card__headerText}> {props.room.price_in_usd} {t('roomPrice')}</h4>
      </div>
      <div>
        <StarsRating rating={props.room.rating}/>
      </div>
      <p>{t('maxOccupancy')}: <b>{props.room.max_occupancy}</b></p>
      <p>{props.room.description}</p>
      <div className={style.card__button}>
        <LinkStyled disabled={!props.room.available} to={`${props.hotelId}/${props.room.id}`}>{buttonText}</LinkStyled>
      </div>
    </div>
  );
};

export default RoomCard;