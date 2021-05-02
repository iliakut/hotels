import React from 'react';
import style from './Header.module.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Header = () => {
  const { t } = useTranslation();

  return (
    <Link to={'/'} aria-label="Home" className={style.headerButton}>
      <h1 className={style.header}>{t('header')}</h1>
    </Link>
  );
};

export default Header;