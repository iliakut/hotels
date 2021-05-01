import React, { FC } from 'react';
import style from './Input.module.css';

const Input: FC<{ inputId: string, label: string, disabled?: boolean }> = (props) => {
  return (
    <div className={style.inputContainer}>
      <label className={style.inputContainer__label} htmlFor={props.inputId}>{props.label}</label>
      <input type="text" disabled={props.disabled} className={style.inputContainer__input} id={props.inputId}/>
    </div>
  );
};

export default Input;