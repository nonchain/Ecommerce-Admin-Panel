import React from 'react';
import styles from './revenue_widget.module.scss';

const RevenueWidget = ({ title, amount, isProfit }) => {
   return (
      <div className={styles.revenue__widget}>
         <h4>{title}</h4>
         <div>
            {isProfit && <i class="icon-16 ri-arrow-up-s-line"></i>}
            {!isProfit && <i class="icon-16 ri-arrow-down-s-line"></i>}
            <span className={`${isProfit && styles.profit}`}>{amount}K</span>
         </div>
      </div>
   )
}

export default RevenueWidget