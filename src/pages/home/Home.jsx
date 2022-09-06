import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import styles from './home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <Sidebar />
      <div className={styles.container}>
         Content
      </div>
    </div>
  )
}

export default Home