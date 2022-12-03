import React, {useEffect} from 'react'
// import JsonData from './ScheduledTransactions.json'
import { TbTrash, TbPlaylistAdd } from "react-icons/tb";
import axios from 'axios';

 function JsonDataDisplay(){

  const [arr, setArr] = React.useState([]);

  useEffect(()=>{
    axios.get(`https://flask-production-7a20.up.railway.app/transactions/${sessionStorage.getItem("accountid")}`)
    .then(
      (res) => {
        const arrayCop = [...res.data.data.transaction_lists]
        setArr(arrayCop)
      }
    )

  }, [])

  const remove = (AccountID, TransactionID) => {
    const arrayCopy = arr.filter((row) => row.TransactionID !== TransactionID);
    setArr(arrayCopy)
    axios.delete('https://flask-production-7a20.up.railway.app/transactions/delete', {'data':{"AccountID": AccountID,
    "TransactionID": TransactionID}
  })
  };

const table_result = arr.map((item)=> {
  return (
    <tr>
    <td>{item.TransactionID}</td>
    <td>{item.AccountID}</td>
    <td>{item.ReceivingAccountID}</td>
    <td>{item.Date}</td>
    <td>{item.TransactionAmount}</td>
    <td>{item.Comment}</td>
    <td onClick={() => remove(item.AccountID, item.TransactionID)}><TbTrash /></td>
</tr>
  )
})

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
          {table_result}
      </table>
        </div>
    )
 }

 export default JsonDataDisplay;