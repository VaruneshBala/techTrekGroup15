import React from 'react'
import JsonData from './ScheduledTransactions.json'
import { TbTrash } from "react-icons/tb";

 function JsonDataDisplay(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.TransactionID}</td>
                    <td>{info.AccountID}</td>
                    <td>{info.ReceivingAccountID}</td>
                    <td>{info.Date}</td>
                    <td>{info.TransactionAmount}</td>
                    <td>{info.Comment}</td>
                    <td onClick={() => console.log(info.TransactionID)}><TbTrash /></td>
                </tr>
            )
        }
    )
 
    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                      <th>Transaction ID</th>
                      <th>Account ID</th>
                      <th>Receiving Account ID</th>
                      <th>Date</th>
                      <th>Transaction Account</th>
                      <th>Comment</th>
                      <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                 
                    
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
 }

 export default JsonDataDisplay;


// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

// export const DataTable = () => {
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//       />
//     </div>
//   );
// }


// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';

// export default function DataTable() {
//     const data = [
//         { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//         { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//         { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//         { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//         { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//         { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//         { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//         { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//         { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//     ];

//     return (
//         <div className="App">
//          <table>
//            <tbody>
    
             
//            </tbody>
//          </table>
//         </div>
//       );
// }



// export const DataTable = () => {
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//       />
//     </div>
//   );
// }

// export const Transactions = () => {
//     return (
//       <div>
//           <h1>
//               This is the transactions page.
//           </h1>
//       </div>
//     )
// }