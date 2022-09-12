import React from 'react';
import styles from './buttons_style.module.scss';


const ButtonPrimary = ({text, onClick}) => {
  return (
    <button onClick={onClick} className={styles.button__primary}>
      {text}
    </button>
  )
}

export default ButtonPrimary