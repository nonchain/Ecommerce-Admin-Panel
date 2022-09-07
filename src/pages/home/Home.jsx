import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import styles from './home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>

      <Sidebar />
      <div className={styles.container}>
        <Navbar />
        Content
      </div>
    </div>
  )
}

export default Home