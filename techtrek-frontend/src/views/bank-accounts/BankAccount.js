import './BankAccount.css';
import { useState, useEffect } from 'react';
import { Account } from '../../components/Account';
import NavBar from '../../components/NavBar';
import axios from 'axios';

export const BankAccount = () => {
    const AccountID = 621156213;
    const [accountData,setAccountData] = useState([])
    useEffect(() => {
        axios.get(`https://flask-production-7a20.up.railway.app/account/4`)
        .then((res) => setAccountData(res.data.data.bank_account))
      });
    

  return (
    <div className="Bank-Account">
        <NavBar />
        <div className="Accounts-Container"> 
            <div className="Accounts">
                <h1>
                    Account Details
                </h1>
                {accountData.map((account) => (
                    <div>
                    <Account
                        UserID = {account.UserID}
                        AccountType={account.AccountType}
                        AccountID = {account.AccountID} 
                        AccountBalance = {account.AccountBalance}
                    />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}