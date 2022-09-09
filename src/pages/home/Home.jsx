import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Revenue from '../../components/revenue/Revenue';
import RevenueChart from '../../components/revenue/RevenueChart';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from '../../components/widget/Widget';
import styles from './home.module.scss';

const Home = () => {
  const widgets = [
    {id: 1, type: 'user', diff: 34, amount: 100},
    {id: 2, type: 'order', diff: 20, amount: 90},
    {id: 3, type: 'earning', diff: -10, amount: 100},
    {id: 4, type: 'balance', diff: 2, amount: 120}
  ]
  return (
    <div className={styles.home}>

      <Sidebar />
      <div className={styles.content}>
        <Navbar />

        <div className={styles.container}>
          <div className={styles.widgets}>
            {widgets.map(widget => <Widget key={widget.id} type={widget.type} diff={widget.diff} amount={widget.amount} />)}
          </div>

          <div className={styles.revenue}>
            <Revenue percentage={70}/>
            <RevenueChart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home