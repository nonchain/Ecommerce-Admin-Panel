import React from 'react';
import styles from './buttons_style.module.scss';

const ButtonDelete = ({text}) => {
  return (
    <button className={styles.button__del}>
      {text}
    </button>
  )
}

export default ButtonDelete