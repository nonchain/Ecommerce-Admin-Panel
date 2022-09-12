import React from 'react';
import styles from './user_widget.module.scss'

const UserWidget = ({ username, email, phone, address }) => {
   return (
      <div className={styles.information}>
         <h3>Information</h3>

         <div className={styles.data}>
            <div className="avatar-large">
               <img src="" alt="avatar" />
            </div>

            <div className={styles.contact}>
               <h2 className={styles.username}>{username}</h2>
               <span className={styles.email}>Email: {email}</span>
               <span className={styles.phone}>Phone: {phone}</span>
               <span className={styles.address}>Address: {address}</span>
            </div>
         </div>
      </div>
   )
}

export default UserWidget