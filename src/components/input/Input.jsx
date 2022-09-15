import React from 'react';
import styles from './input.module.scss';

const Input = ({type, placeholder, id, label}) => {
  return (
    <div className={styles.input}>
      <label htmlFor={id} className={`${!label && 'hidden'}`}>{label}</label>
      <input id={id} type={type} placeholder={placeholder} />
    </div>
  )
}

export default Input