import React from 'react'
import './DataTable.css'
import { DataGrid } from '@mui/x-data-grid'
import { columns, rows } from '../../Assets/Utils/TestData'

function DataTable() {
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: () => {
        return (
          <div className='cellAction'>
            <div className='viewButton'>View</div>
            <div className='deleteButton'>Delete</div>
          </div>
        )
      },
    },
  ]
  return (
    <div className='dataTable'>
      <DataGrid rows={rows} columns={columns.concat(actionColumn)} pageSize={10} rowsPerPageOptions={[10]} checkboxSelection />
    </div>
  )
}

export default DataTable
