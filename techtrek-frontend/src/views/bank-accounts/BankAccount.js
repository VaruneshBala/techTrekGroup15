import React from 'react'
import { useState } from 'react';
import NavBar from '../../components/NavBar';

export const BankAccount = () => {
    const AccountID = 621156213;
    const AccountData = [
        {
            "AccountID": 621156213,
            "UserID": 1,
            "AccountType": "Saving",
            "AcccountBalance": 70200.71
        },
        {
            "AccountID": 958945214,
            "UserID": 1,
            "AccountType": "Current",
            "AcccountBalance": 99720.46
        }
    ];
  return (
    <div>
        <NavBar />
        <h1>
            This is the bank account page.
        </h1>
    </div>
  )
}
