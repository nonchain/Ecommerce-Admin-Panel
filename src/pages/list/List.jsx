import { style } from '@mui/system';
import React from 'react'
import TableData from '../../components/table/TableData';

import styles from './list.module.scss';

const List = () => {
  return (
    <div>
      <div className={styles.table}>
        <TableData />
      </div>
    </div>
  )
}

export default List