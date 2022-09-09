import React from 'react';
import RevenueWidget from './RevenueWidget';
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';
import styles from './revenue.module.scss';

const Revenue = ({ percentage }) => {
   const revenueWidgets = [
      { title: 'Target', amount: 12.4, isProfit: false },
      { title: 'Last week', amount: 12.4, isProfit: true },
      { title: 'Last month', amount: 512.4, isProfit: false }
   ]

   return (
      <div className={styles.revenue}>
         <div className={styles.revenue__header}>
            <h3>Total Revenue</h3>
            <i class="icon-20 ri-more-2-fill"></i>
         </div>

         <div className={styles.revenue__body}>
            <div className={styles.progress__bar}>
               <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={4} styles={buildStyles({ strokeLinecap: 'butt'})}/>
            </div>

            <h3>Total sales made today</h3>
            <span className={styles.sale__amount}>$ 420</span>

            <p>
               Previous transactions processing. <br />
               Last payments may not be included
            </p>
         </div>

         <div className={styles.revenue__footer}>
            {revenueWidgets.map(widget => <RevenueWidget
               title={widget.title}
               amount={widget.amount}
               isProfit={widget.isProfit} />)}
         </div>
      </div>
   )
}

export default Revenue