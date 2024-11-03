// import React from 'react';
// import { DataGrid } from '@mui/x-data-grid';

// const ColumnVirtualizationGrid = () => {
//   const columns = [
//     { field: 'id', headerName: 'ID', width: 90 },
//     { field: 'name', headerName: 'Name', width: 150 },
//     { field: 'age', headerName: 'Age', width: 110 },
//     { field: 'email', headerName: 'Email', width: 200 },
//   ];

//   const rows = [
//     { id: 1, name: 'Dara', age: 23, email: 'dara@example.com' },
//     { id: 2, name: 'Hasa', age: 25, email: 'hasa@example.com' },
//     { id: 3, name: 'rishi', age: 28, email: 'rishi@example.com' },
//     { id: 4, name: 'chocky', age: 33, email: 'chocky@example.com' },
//     { id: 5, name: 'chocky', age: 33, email: 'chocky@example.com' },
//     { id: 6, name: 'chocky', age: 33, email: 'chocky@example.com' },
//     { id: 7, name: 'chocky', age: 33, email: 'chocky@example.com' },
//   ];

//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={3}
//         rowsPerPageOptions={[3]}
//         checkboxSelection
//         disableSelectionOnClick
//       />
//     </div>
//   );
// };

// export default ColumnVirtualizationGrid;





// import React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { useNavigate } from 'react-router-dom';

// const ColumnVirtualizationGrid = () => {
//   const navigate = useNavigate(); // Hook for navigation

//   const columns = [
//     { field: 'id', headerName: 'ID', width: 90 },
//     { field: 'name', headerName: 'Name', width: 150 },
//     { field: 'age', headerName: 'Age', width: 110 },
//     { field: 'email', headerName: 'Email', width: 200 },
//   ];

//   const rows = [
//     { id: 1, name: 'Dara', age: 23, email: 'dara@example.com' },
//     { id: 2, name: 'Hasa', age: 25, email: 'hasa@example.com' },
//     { id: 3, name: 'Rishi', age: 28, email: 'rishi@example.com' },
//     { id: 4, name: 'Chocky', age: 33, email: 'chocky@example.com' },
//   ];

//   const handleRowClick = (params) => {
//     navigate(`/details?id=${params.row.id}&name=${params.row.name}&age=${params.row.age}&email=${params.row.email}`);
//   };

//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//         disableSelectionOnClick
//         onRowClick={handleRowClick} 
//       />
//     </div>
//   );
// };

// export default ColumnVirtualizationGrid;





// import React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { useNavigate } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   gridContainer: {
//     height: 400,
//     width: '100%',
//     '& .MuiDataGrid-columnHeader': {
//       backgroundColor: theme.palette.primary.main,
//       color: theme.palette.common.white,
//       fontWeight: 'bold',
//     },
//     '& .MuiDataGrid-row:hover': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }));

// const ColumnVirtualizationGrid = () => {
//   const classes = useStyles();
//   const navigate = useNavigate();

//   const columns = [
//     { field: 'id', headerName: 'ID', width: 90 },
//     { field: 'name', headerName: 'Name', width: 150 },
//     { field: 'age', headerName: 'Age', width: 110 },
//     { field: 'email', headerName: 'Email', width: 200 },
//   ];

//   const rows = [
//     { id: 1, name: 'Dara', age: 23, email: 'dara@example.com' },
//     { id: 2, name: 'Hasa', age: 25, email: 'hasa@example.com' },
//     { id: 3, name: 'Rishi', age: 28, email: 'rishi@example.com' },
//     { id: 4, name: 'Chocky', age: 33, email: 'chocky@example.com' },
//   ];

//   const handleRowClick = (params) => {
//     navigate(`/details?id=${params.row.id}&name=${params.row.name}&age=${params.row.age}&email=${params.row.email}`);
//   };

//   return (
//     <div className={classes.gridContainer}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//         disableSelectionOnClick
//         onRowClick={handleRowClick}
//       />
//     </div>
//   );
// };

// export default ColumnVirtualizationGrid;




// import React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { useNavigate } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   gridContainer: {
//     height: 400,
//     width: '100%',
//     '& .MuiDataGrid-columnHeader': {
//       backgroundColor: theme.palette.primary.main,
//       color: theme.palette.common.white,
//       fontWeight: 'bold',
//     },
//     '& .MuiDataGrid-row:hover': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }));

// const ColumnVirtualizationGrid = () => {
//   const classes = useStyles();
//   const navigate = useNavigate();

//   const columns = [
//     { field: 'id', headerName: 'ID', width: 90 },
//     { field: 'name', headerName: 'Name', width: 150 },
//     { field: 'age', headerName: 'Age', width: 110 },
//     { field: 'email', headerName: 'Email', width: 200 },
//   ];

//   const rows = [
//     { id: 1, name: 'Dara', age: 23, email: 'dara@example.com' },
//     { id: 2, name: 'Hasa', age: 25, email: 'hasa@example.com' },
//     { id: 3, name: 'Rishi', age: 28, email: 'rishi@example.com' },
//     { id: 4, name: 'Chocky', age: 33, email: 'chocky@example.com' },
//     { id: 5, name: 'Alex', age: 30, email: 'alex@example.com' },
//     { id: 6, name: 'John', age: 29, email: 'john@example.com' },
//   ];

//   const handleRowClick = (params) => {
//     navigate(`/details?id=${params.row.id}&name=${params.row.name}&age=${params.row.age}&email=${params.row.email}`);
//   };

//   return (
//     <div className={classes.gridContainer}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5, 10, 20]} 
//         checkboxSelection
//         disableSelectionOnClick
//         onRowClick={handleRowClick}
//       />
//     </div>
//   );
// };

// export default ColumnVirtualizationGrid;











import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@mui/material'; // Import TextField for the search input

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    height: 400,
    width: '100%',
    '& .MuiDataGrid-columnHeader': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      fontWeight: 'bold',
    },
    '& .MuiDataGrid-row:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  searchContainer: {
    marginBottom: theme.spacing(2),
  },
}));

const ColumnVirtualizationGrid = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'age', headerName: 'Age', width: 110 },
    { field: 'email', headerName: 'Email', width: 200 },
  ];

  const rows = [
    { id: 1, name: 'Dara', age: 23, email: 'dara@example.com' },
    { id: 2, name: 'Hasa', age: 25, email: 'hasa@example.com' },
    { id: 3, name: 'Rishi', age: 28, email: 'rishi@example.com' },
    { id: 4, name: 'Chocky', age: 33, email: 'chocky@example.com' },
    { id: 5, name: 'Alex', age: 30, email: 'alex@example.com' },
    { id: 6, name: 'John', age: 29, email: 'john@example.com' },
  ];

  // Filter rows based on search query
  const filteredRows = rows.filter((row) => {
    return (
      row.id.toString().includes(searchQuery.toLowerCase()) ||
      row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.age.toString().includes(searchQuery.toLowerCase()) ||
      row.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleRowClick = (params) => {
    navigate(`/details?id=${params.row.id}&name=${params.row.name}&age=${params.row.age}&email=${params.row.email}`);
  };

  return (
    <div>
      <div className={classes.searchContainer}>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className={classes.gridContainer}>
        <DataGrid
          rows={filteredRows} // Use filtered rows
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
          disableSelectionOnClick
          onRowClick={handleRowClick}
        />
      </div>
    </div>
  );
};

export default ColumnVirtualizationGrid;
