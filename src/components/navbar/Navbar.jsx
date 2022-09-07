import React from 'react';
import styles from './navbar.module.scss';

import Profile from '../../assets/profile.png';

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.search__area}>
        <div className={styles.search__bar}>
          <input type="text" placeholder='Search ...' />
          <i class="ri-search-line"></i>
        </div>
      </div>

      <div>


        <nav className={styles.nav}>
          {/* CHANGE LANGUAGE */}
          <button>
            <i class="ri-global-line"></i>
            <span>English</span>
          </button>

          {/* MENU */}
          <ul>
            <li>
              <i class="icon-20 ri-list-unordered"></i>
            </li>
            <li>
              <i class="icon-20 ri-chat-4-line"></i>
              <div className={styles.counter}>1</div>
            </li>
            <li>
              <i class="icon-20 ri-notification-3-line"></i>
              <div className={styles.counter}>4</div>
            </li>
            <li>
              <i class="icon-20 ri-fullscreen-exit-line"></i>
            </li>
            <li>
              <i class="icon-20 ri-moon-line"></i>
            </li>
          </ul>

          {/* PROFILE */}
          <div className={styles.account}>
            <a href="" >
              <img src={Profile} alt="account" />
            </a>
          </div>
        </nav>

      </div>
    </div>
  )
}

export default Navbar