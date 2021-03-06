import React, { FC } from 'react';
import style from './ButtonStyles.module.css';

type ButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  className?: string
}

const ButtonStyled: FC<ButtonProps> = (props) => {
  return (
    <button className={props.className || `${style.button}`} onClick={props.onClick}>{props.children}</button>
  );
};

export default ButtonStyled;