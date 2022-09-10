import React from 'react';
import { Link } from 'react-router-dom';
import styles from './sidebaritemes.module.scss';

const SidebarItems = ({ title, items }) => {
   const itemsList = items?.map(item => {
      const link = item?.link || '/'
      return (
         <li>
            <Link to={link} className={styles.item}>
               <i className={`${item.icon} icon-20`}></i>
               <span>{item.name}</span>
            </Link>
         </li>
      )
   });
   return (
      <div>
         <h2 className={styles.title}>{title}</h2>
         <ul className={styles.group}>
            {itemsList}
         </ul>
      </div>
   )
}

export default SidebarItems