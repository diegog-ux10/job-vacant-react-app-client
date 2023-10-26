import { DataGrid } from '@mui/x-data-grid'
import { Box } from '@mui/material'

// import PropTypes from 'prop-types';

// eslint-disable-next-line no-empty-pattern, react/prop-types
const Table = ({columns, rows}) => {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  )
}

Table.propTypes = {}

export default Table;