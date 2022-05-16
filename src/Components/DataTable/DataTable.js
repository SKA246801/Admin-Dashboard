import React from 'react'
import './DataTable.css'
import { DataGrid } from '@mui/x-data-grid'
import { columns, rows } from '../../Assets/Utils/TestData'
import { Link } from 'react-router-dom'

function DataTable() {
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: () => {
        return (
          <div className='cellAction'>
            <Link to='/users/test' style={{ textDecoration: 'none' }}>
              <div className='viewButton'>View</div>
            </Link>
            <div className='deleteButton'>Delete</div>
          </div>
        )
      },
    },
  ]
  return (
    <div className='dataTable'>
      <div className='dataTableTitle'>
        Current Users
        <Link to='/users/create' className='createUserLink'>
          Add New
        </Link>
      </div>
      <DataGrid rows={rows} columns={columns.concat(actionColumn)} pageSize={10} rowsPerPageOptions={[10]} checkboxSelection />
    </div>
  )
}

export default DataTable
