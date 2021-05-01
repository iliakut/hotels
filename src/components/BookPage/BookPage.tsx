import React from 'react';
import Input from '../UI/Input/Input';
import style from './BooPage.module.css';
import { useTranslation } from 'react-i18next';
import ButtonStyled from '../UI/ButtonStyled/ButtonStyled';
import { useAppSelector } from '../../app/hooks';
import { selectUser } from '../../app/userSlice';

const BookPage = () => {
  const { t } = useTranslation();
  const today = new Date();
  const nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
  const [month, date, year]    = new Date(nextWeek).toLocaleDateString(t('timeLocale')).split("/")
  const user = useAppSelector(selectUser);

  return (
    <div className={style.container}>
      <h2>Confirmation</h2>
      <form>
        <Input value={user.firstName} inputId="firstName" label={t('firstName')}/>
        <Input value={user.lastName} inputId="lastName" label={t('lastName')}/>
        <Input value={'123'} disabled={true} inputId="hotelName" label={t('hotelName')}/>
        <Input value={'123'} disabled={true} inputId="roomName" label={t('roomName')}/>
        <p>{t('finalPrice')}: 123</p>
        <p>{t('arrivalDate')}: {`${date}.${month}.${year}`}</p>
        <ButtonStyled onClick={(e) => { e.preventDefault() }}>Confirm</ButtonStyled>
      </form>
    </div>
  );
};

export default BookPage;