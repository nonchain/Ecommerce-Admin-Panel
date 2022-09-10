import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import styles from './table_transactions.module.scss';

const rows = [
   { id: 114315, product: 'Acer Nitro 5', name: 'John Smit', date: '1 March', amount: 788, payment: 'PayPal', status: 'Approved' },
   { id: 223523, product: 'Playstation 5', name: 'Michel Doe', date: '11 April', amount: 500, payment: 'Cash', status: 'Approved' },
   { id: 223523, product: 'AMD Ryzen 7 5800x', name: 'Alice Doe', date: '25 May', amount: 290, payment: 'PayPal', status: 'Pending' },
   { id: 223523, product: 'Wallet', name: 'Lisa Morphy', date: '22 Jun', amount: 45, payment: 'Cash', status: 'Pending' },
   { id: 223523, product: 'iPhone 13 Pro', name: 'Ali Carol', date: '15 August', amount: 1100, payment: 'PayPal', status: 'Canceled' },
];

const setStatus = (status) => {
   if(status === 'Pending') return styles.pending;
   if(status === 'Canceled') return styles.canceled;
   return styles.approved;
}

const TableTransactions = () => {
   return (
      <TableContainer component={Paper}>
         <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
               <TableRow>
                  <TableCell>Tracking ID</TableCell>
                  <TableCell>Product</TableCell>
                  <TableCell align="right">Customer</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell align="right">Payment Method</TableCell>
                  <TableCell align="right">Status</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {rows.map((row) => (
                  <TableRow key={row.name}>
                     <TableCell component="th" scope="row">
                        <span className={styles.order__id}>#{row?.id}</span>
                     </TableCell>
                     <TableCell >{row?.product}</TableCell>
                     <TableCell align="right">{row?.name}</TableCell>
                     <TableCell align="right">{row?.date}</TableCell>
                     <TableCell align="right">${row?.amount}</TableCell>
                     <TableCell align="right">{row?.payment}</TableCell>
                     <TableCell align="right">
                        <span className={`${styles.order__status} ${setStatus(row?.status)}`}>
                           {row?.status}
                        </span>
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   )
}

export default TableTransactions