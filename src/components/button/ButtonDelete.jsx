import React from 'react';
import styles from './buttons_style.module.scss';

const ButtonDelete = ({text, onClick}) => {
  return (
    <button className={styles.button__del} onClick={onClick}>
      {text}
    </button>
  )
}

export default ButtonDelete