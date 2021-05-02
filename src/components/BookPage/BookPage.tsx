import React from 'react';
import Input from '../UI/Input/Input';
import style from './BooPage.module.css';
import { useTranslation } from 'react-i18next';
import ButtonStyled from '../UI/ButtonStyled/ButtonStyled';
import { useAppSelector } from '../../app/hooks';
import { selectUser } from '../../app/userSlice';
import { useParams } from 'react-router-dom';
import useGetHotel from '../../lib/customHooks/useGetHotel';
import useGetRooms from '../../lib/customHooks/useGetRooms';
import { selectCurrentHotel } from '../../app/hotelsSlice';
import { selectRoom } from '../../app/roomsSlice';
import { useHistory } from "react-router-dom";

const BookPage = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const params = useParams<{ id: string, roomId: string }>();
  // better to get one more time if price changes (if not, better to cache it :) )
  useGetHotel(params.id);
  useGetRooms(params.id);
  const hotel = useAppSelector(selectCurrentHotel);
  const room = useAppSelector(selectRoom(params.roomId));

  const today = new Date();
  const nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
  const [month, date, year]    = new Date(nextWeek).toLocaleDateString(t('timeLocale')).split("/")
  const user = useAppSelector(selectUser);

  const onClickConfirm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    history.push('/');
  }

  return (
    <div className={style.container}>
      <h2>Confirmation</h2>
      <form>
        <Input value={user.firstName} inputId="firstName" label={t('firstName')}/>
        <Input value={user.lastName} inputId="lastName" label={t('lastName')}/>
        <Input value={hotel?.name || ''} disabled={true} inputId="hotelName" label={t('hotelName')}/>
        <Input value={room?.name || ''} disabled={true} inputId="roomName" label={t('roomName')}/>
        <p>{t('finalPrice')}: {room?.price_in_usd} {t('roomPrice')}</p>
        <p>{t('arrivalDate')}: {`${date}.${month}.${year}`}</p>
        <ButtonStyled onClick={onClickConfirm}>Confirm</ButtonStyled>
      </form>
    </div>
  );
};

export default BookPage;