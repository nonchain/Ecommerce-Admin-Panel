import React from 'react';
import TableTransactions from '../../components/table/TableTransactions';
import RevenueChart from '../../components/revenue/RevenueChart';
import styles from './single.module.scss';
import UserWidget from '../../components/widget/UserWidget';

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

const Single = () => {
  return (
    <div className={styles.user__info}>
      <div className={styles.info__body}>
        <UserWidget />
        <RevenueChart />
      </div>

      <div className={styles.transactions}>
        <h2>Last transactions</h2>

        <div>
          <TableTransactions />
        </div>
      </div>
    </div>
  )
}

export default Single