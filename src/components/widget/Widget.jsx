import React from 'react';
import styles from './widget.module.scss';

const Widget = ({ type, amount, diff }) => {

   const data = {
      user: {
         title: 'Users',
         isMoney: false,
         amount,
         diff,
         link: 'View all users',
         icon: <i class='icon-16 ri-user-line'></i>
      },
      order: {
         title: 'Orders',
         isMoney: false,
         amount,
         diff,
         link: 'View all orders',
         icon: <i class='icon-16 ri-shopping-cart-line'></i>
      },
      earning: {
         title: 'Earning',
         isMoney: true,
         amount,
         diff,
         link: 'View new earning',
         icon: <i class='icon-16 ri-money-dollar-circle-line'></i>
      },
      balance: {
         title: 'Balance',
         isMoney: true,
         amount,
         diff,
         link: 'View details',
         icon: <i class='icon-16 ri-wallet-3-line'></i>
      }
   } ;

   return (
      <div className={styles.widget}>

         <div className={styles.left}>
            <h2 className={styles.title}>{data[type]?.title}</h2>
            <span className={styles.counter}>{data[type]?.isMoney && `$`} {data[type]?.amount}</span>
            <div className={styles.link}>{data[type]?.link}</div>
         </div>

         <div className={styles.right}>
            <div className={styles.percentage}>
               <i class={`icon-20 ri-arrow-up-s-line ${data[type]?.diff < 0 && 'hidden'}`}></i>
               <i class={`icon-20 ri-arrow-down-s-line ${data[type]?.diff > 0 && 'hidden'}`}></i>
               <span className={data[type]?.diff < 0 && styles.negative}>{data[type]?.diff}%</span>
            </div>

            {data[type]?.icon}
         </div>
      </div>
   )
}

export default Widget