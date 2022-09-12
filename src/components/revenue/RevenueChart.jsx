import React from 'react';
import { Chart } from '../chart/Chart';
import styles from './revenue_chart.module.scss';

const data = [
   { name: 'Jan', total: 400, },
   { name: 'Feb', total: 320, },
   { name: 'Mar', total: 224, },
   { name: 'Apr', total: 278, },
   { name: 'May', total: 189, },
   { name: 'Jun', total: 239, },
   { name: 'Jul', total: 203, },
   { name: 'Aug', total: 239, },
   { name: 'Sep', total: 312, },
   { name: 'Oct', total: 278, },
   { name: 'Nov', total: 326, },
   { name: 'Dec', total: 346, }
];

const calcAvg = () => {
   let avg = 0;
   for (let i = 0; i < data.length; i++) {
      avg += data[i].total;
   }

   return Math.floor(avg / data.length);
}

const calcMin = () => {
   const newArray = [];
   for (let i = 0; i < data.length; i++) {
      newArray.push(data[i].total);
   }
   newArray.sort((a, b) => a - b);

   return newArray.shift();
}

const calcMax = () => {
   const newArray = [];
   for (let i = 0; i < data.length; i++) {
      newArray.push(data[i].total);
   }
   newArray.sort((a, b) => a - b);

   return newArray.pop();
}

const RevenueChart = () => {
   return (
      <div className={styles.revenue__chart}>
         <div className={styles.revenue__header}>
            <h3>Total 6 month revenue</h3>
            <div>
               <span>Min: ${calcMin()}</span>
               <span>Max: ${calcMax()}</span>
               <span>Average: ${calcAvg()}</span>
            </div>
         </div>

         <Chart data={data} />
      </div>
   )
}

export default RevenueChart