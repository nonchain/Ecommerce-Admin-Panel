import React, { useState } from 'react';
import Input from '../../components/input/Input';
import ButtonPrimary from '../../components/button/ButtonPrimary';
import styles from './new.module.scss';



const New = () => {
  const [file, setFile] = useState('');

  const chooseFile = (e) => {
    const imageFile = e.target.files[0];
    if (!imageFile) return console.log('Not file');
    setFile(imageFile);
    console.log(file);
  }

  return (
    <div className={styles.new__user}>
      <h2>Add User</h2>

      <div className={styles.upload}>
        <img
          className='avatar-large'
          src={
            file ? URL.createObjectURL(file) : 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg'
          }
          alt="user image" />
        <div className={styles.upload__text}>
          <i className="ri-upload-cloud-2-line"></i>
          <label htmlFor='file'>Choose image</label>
          <input type="file" className='hidden' id='file' onChange={chooseFile} />
        </div>
      </div>

      <div className={styles.user__info}>
        <Input id={'surname'} placeholder={'John'} label={'Surname'} type={'text'} />
        <Input id={'forename'} placeholder={'Doe'} label={'Forename'} type={'text'} />
        <Input id={'age'} placeholder={'22'} label={'Age'} type={'text'} />
        <Input id={'province'} placeholder={'Zanjan, Abhar'} label={'Province/City'} type={'text'} />
        <Input id={'email'} placeholder={'example@gmail.com'} label={'Email'} type={'text'} />
        <Input id={'phone'} placeholder={'09xxxxxxxxx'} label={'Phone'} type={'text'} />
      </div>

      <div className={styles.submit__button}>
        <ButtonPrimary text={'Add user'} />
      </div>
    </div>
  )
}

export default New