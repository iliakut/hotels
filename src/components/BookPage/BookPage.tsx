import React from 'react';
import Input from '../UI/Input/Input';
import style from './BooPage.module.css';
import { useTranslation } from 'react-i18next';
import ButtonStyled from '../UI/ButtonStyled/ButtonStyled';

const BookPage = () => {
  const { t } = useTranslation();
  const today = new Date();
  const nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
  const [month, date, year]    = new Date(nextWeek).toLocaleDateString(t('timeLocale')).split("/")

  return (
    <div className={style.container}>
      <h2>Confirmation</h2>
      <form>
        <Input inputId="firstName" label={t('firstName')}/>
        <Input inputId="lastName" label={t('lastName')}/>
        <Input disabled={true} inputId="hotelName" label={t('hotelName')}/>
        <Input disabled={true} inputId="roomName" label={t('roomName')}/>
        <p>{t('finalPrice')}: 123</p>
        <p>{t('arrivalDate')}: {`${date}.${month}.${year}`}</p>
        <ButtonStyled onClick={(e) => { e.preventDefault() }}>Confirm</ButtonStyled>
      </form>
    </div>
  );
};

export default BookPage;