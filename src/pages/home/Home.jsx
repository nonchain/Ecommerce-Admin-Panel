import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from '../../components/widget/Widget';
import styles from './home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>

      <Sidebar />
      <div className={styles.content}>
        <Navbar />

        <div className={styles.container}>
          <div className={styles.widgets}>
            <Widget type={'user'} diff={20} amount={100} />
            <Widget type={'order'} diff={20} amount={100} />
            <Widget type={'earning'} diff={-10} amount={100} />
            <Widget type={'balance'} diff={20} amount={100} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home