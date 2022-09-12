import React from 'react';
import Revenue from '../../components/revenue/Revenue';
import RevenueChart from '../../components/revenue/RevenueChart';
import TableTransactions from '../../components/table/TableTransactions';
import Widget from '../../components/widget/Widget';
import styles from './home.module.scss';

const Home = () => {
  const widgets = [
    { id: 1, type: 'user', diff: 34, amount: 100 },
    { id: 2, type: 'order', diff: 20, amount: 90 },
    { id: 3, type: 'earning', diff: -10, amount: 100 },
    { id: 4, type: 'balance', diff: 2, amount: 120 }
  ]
  return (
    <div className={styles.home}>


      <div className={styles.content}>
        <div className={styles.widgets}>
          {widgets.map(widget => <Widget key={widget.id} type={widget.type} diff={widget.diff} amount={widget.amount} />)}
        </div>

        <div className={styles.revenue}>
          <Revenue percentage={70} />
          <RevenueChart />
        </div>

        <div className={styles.transactions}>
          <h2>Last transactions</h2>

          <div>
            <TableTransactions />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home