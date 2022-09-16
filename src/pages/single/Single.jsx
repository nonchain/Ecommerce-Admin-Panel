import React from 'react';
import { useLocation } from "react-router-dom";
import TableTransactions from '../../components/table/TableTransactions';
import RevenueChart from '../../components/revenue/RevenueChart';
import styles from './single.module.scss';
import UserWidget from '../../components/widget/UserWidget';

const Single = () => {
  const location = useLocation();
  const {email, phone, username, img} = location.state?.data;

  return (
    <div className={styles.user__info}>
      <div className={styles.info__body}>
        <UserWidget email={email} phone={phone} username={username} img={img}/>
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