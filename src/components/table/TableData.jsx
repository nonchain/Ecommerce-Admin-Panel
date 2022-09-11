import React from 'react';
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../data/usersData';

const actionColumn = [
   {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell(params) {
         return (
            <div style={{ display: 'flex', gap: '8px' }}>
               <Link to={params.row.id}>
                  <button style={{ padding: '0.5rem', backgroundColor: '#2867e1', color: '#fff', outline: 'none' }}>View</button>
               </Link>
               <button style={{ padding: '0.5rem', backgroundColor: 'transparent', color: '#dd2424', fontWeight: '600', outline: 'none' }}>Delete</button>
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