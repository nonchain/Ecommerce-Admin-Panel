import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../data/usersData';
import ButtonPrimary from '../button/ButtonPrimary';
import ButtonDelete from '../button/ButtonDelete';


const setData = ({ username, email, img }) => {
   const data = {
      username: username,
      email: email,
      img: img,
      phone: '09123456789',
   }

   return data;
}



const TableData = () => {
   const [row, setRow] = useState(userRows);

   const deleteItem = (id) => {
      setRow(
         row.filter(item => item.id !== id)
      )
   }

   const actionColumn = [
      {
         field: 'action',
         headerName: 'Action',
         width: 200,
         renderCell(params) {
            return (
               <div style={{ display: 'flex', gap: '8px' }}>
                  <Link to={`${params.row.id}`} state={{ data: setData(params.row) }}>
                     <ButtonPrimary text={'View'} />
                  </Link>
                  <ButtonDelete text={'Delete'} onClick={()=> deleteItem(params.row.id)}/>
               </div>
            )
         }
      }
   ];

   return (
      <div style={{ height: 520, width: '100%' }}>
         <DataGrid
            rows={row}
            columns={userColumns.concat(actionColumn)}
            pageSize={7}
            rowsPerPageOptions={[7]}
            checkboxSelection
         />
      </div>
   )
}

export default TableData