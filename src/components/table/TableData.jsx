import React from 'react';
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../data/usersData';
import ButtonPrimary from '../button/ButtonPrimary';
import ButtonDelete from '../button/ButtonDelete';

const actionColumn = [
   {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell(params) {
         return (
            <div style={{ display: 'flex', gap: '8px' }}>
               <Link to={`${params.row.id}`}>
                  <ButtonPrimary text={'View'} />
               </Link>
               <ButtonDelete text={'Delete'} />
            </div>
         )
      }
   }
]

const TableData = () => {
   return (
      <div style={{ height: 520, width: '100%' }}>
         <DataGrid
            rows={userRows}
            columns={userColumns.concat(actionColumn)}
            pageSize={7}
            rowsPerPageOptions={[7]}
            checkboxSelection
         />
      </div>
   )
}

export default TableData