import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import style from './LinkStyled.module.css';

const LinkStyled: FC<{ className?: string, to: string }> = (props) => {
  return (
    <Link
      className={`${style.link} ${props.className ? props.className : ''}`}
      to={props.to}>
      {props.children}
    </Link>
  );
};

export default LinkStyled;