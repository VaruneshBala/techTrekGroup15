import './BankAccount.css';
import { useState, useEffect } from 'react';
import { Account } from '../../components/Account';
import NavBar from '../../components/NavBar';
import axios from 'axios';

export const BankAccount = () => {
    const UserID = 4;
    const [accountData,setAccountData] = useState([])
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')    
      useEffect(() => {
        axios.get(`https://flask-production-7a20.up.railway.app/account/${UserID}`)
        .then((res) => setAccountData(res.data.data.bank_account))
        .catch((err) =>{
            console.log(err.message)
            setError(true)
            setErrorMessage(err.message)
        })
      }, []);

  return (
    <div className="Bank-Account">
        <NavBar />
        <div className="Accounts-Container"> 
            <div className="Accounts">
                <h1>
                    Account Details
                </h1>
                {
                    error ?
                    <div>
                        <h1>{errorMessage}</h1>
                        <h3>Please try again later...</h3>
                    </div>    
                    :
                    accountData.map((account) => (
                        <div>
                        <Account
                            key = {account.AccountID}
                            UserID = {account.UserID}
                            AccountType={account.AccountType}
                            AccountID = {account.AccountID} 
                            AccountBalance = {account.AccountBalance}
                        />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}