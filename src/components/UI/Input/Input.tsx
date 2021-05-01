import React, { FC } from 'react';
import style from './Input.module.css';

type InputProps = {
  inputId: string
  label: string
  disabled?: boolean
  value: string
}

const Input: FC<InputProps> = (props) => {
  return (
    <div className={style.inputContainer}>
      <label className={style.inputContainer__label} htmlFor={props.inputId}>{props.label}</label>
      <input value={props.value} type="text" disabled={props.disabled} className={style.inputContainer__input} id={props.inputId}/>
    </div>
  );
};

export default Input;