import React from 'react';
import 'remixicon/fonts/remixicon.css'
import styles from './sidebaritemes.module.scss';

const SidebarItems = ({ title, items }) => {
   const itemsList = items?.map(item => (
      <li>
         <i className={`${item.icon} icon-20`}></i>
         <span>{item.name}</span>
      </li>
   ));
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