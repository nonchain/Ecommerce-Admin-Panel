import { style } from '@mui/system';
import React from 'react'
import { Link } from 'react-router-dom';
import TableData from '../../components/table/TableData';

import styles from './list.module.scss';

const List = () => {
  return (
    <div>
      <Link to={'new'}>
        <span className={styles.add__user}>
          <i className="ri-add-line"></i>
          Add user
        </span>
      </Link>
      <div className={styles.table}>
        <TableData />
      </div>
    </div>
  )
}

export default List