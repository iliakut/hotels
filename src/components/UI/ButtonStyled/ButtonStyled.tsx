import React, { FC } from 'react';
import style from './ButtonStyles.module.css';

type ButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const ButtonStyled: FC<ButtonProps> = (props) => {
  return (
    <button className={style.button} onClick={props.onClick}>{props.children}</button>
  );
};

export default ButtonStyled;