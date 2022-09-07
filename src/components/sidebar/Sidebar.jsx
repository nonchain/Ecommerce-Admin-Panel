import React from 'react';
import SidebarItems from './SidebarItems';

import styles from './sidebar.module.scss';

const Sidebar = () => {
  // For icons, you should pass the className of the icon
  const sidebarItemsMain = [
    { icon: 'ri-dashboard-fill', name: 'Dashboard' }
  ];

  const sidebarItemsList = [
    { icon: 'ri-user-fill', name: 'Users' },
    { icon: 'ri-store-2-fill', name: 'Products' },
    { icon: 'ri-bank-card-fill', name: 'Orders' },
    { icon: 'ri-truck-fill', name: 'Delivery' },
  ];

  const sidebarItemsUseful = [
    { icon: 'ri-bar-chart-fill', name: 'State' },
    { icon: 'ri-notification-3-fill', name: 'Notifications' },
  ];

  const sidebarItemsServices = [
    { icon: 'ri-service-fill', name: 'System Health' },
    { icon: 'ri-settings-6-fill', name: 'Logs' },
    { icon: 'ri-settings-fill', name: 'Setting' },
  ];

  const sidebarItemsUser = [
    { icon: 'ri-account-circle-line', name: 'Profile' },
    { icon: 'ri-logout-box-line', name: 'Logout' },
  ];
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <h2 className={styles.logo}>River Shop</h2>
      </div>

      <div className={styles.center}>
        <SidebarItems title={'Main'} items={sidebarItemsMain} />
        <SidebarItems title={'List'} items={sidebarItemsList} />
        <SidebarItems title={'Useful'} items={sidebarItemsUseful} />
        <SidebarItems title={'Services'} items={sidebarItemsServices} />
        <SidebarItems title={'User'} items={sidebarItemsUser} />
      </div>
    </div>
  )
}

export default Sidebar