import './BankAccount.css';
import { useState } from 'react';
import { Account } from '../../components/Account';
import NavBar from '../../components/NavBar';

export const BankAccount = () => {
    const AccountID = 621156213;
    const [accountData,setAccountData] = useState([
        {
            "AccountID": 621156213,
            "UserID": 1,
            "AccountType": "Saving",
            "AccountBalance": 70200.71
        },
        {
            "AccountID": 958945214,
            "UserID": 1,
            "AccountType": "Current",
            "AccountBalance": 99720.46
        }
    ])
  return (
    <div className="Bank-Account">
        <NavBar />
        <h1>
            This is the bank account page.
        </h1>
        {
            <div className="Accounts-Container">
                <div className="Accounts">
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
        }
    </div>
  )
}
