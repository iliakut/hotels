import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import style from './LinkStyled.module.css';

const LinkStyled: FC<{ className?: string, to: string, disabled?: boolean }> = (props) => {
  return (
    <>
      {
        props.disabled
          ?
          <button disabled={props.disabled} className={`${style.link} ${style.disabled} ${props.className ? props.className : ''}`}>
            {props.children}
          </button>
          :
          <Link
            className={`${style.link} ${props.className ? props.className : ''}`}
            to={props.to}>
            {props.children}
          </Link>
      }
    </>
  );
};

export default LinkStyled;