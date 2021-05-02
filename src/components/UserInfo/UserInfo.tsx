import React from 'react';
import style from './UserInfo.module.css';
import { useAppSelector } from '../../app/hooks';
import { selectUser } from '../../app/userSlice';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

const UserInfo = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const user = useAppSelector(selectUser);
  const letters = `${user.firstName[0].toUpperCase()}${user.lastName[0].toUpperCase()}`;
  const onCLick = () => {
    history.push('/user')
  }

  return (
    <button
      aria-label={t('userAvatar')}
      onClick={onCLick}
      className={style.fixedButton}>
      {letters}
    </button>
  );
};

export default UserInfo;