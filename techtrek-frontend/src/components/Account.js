import React, { useState } from 'react'
import { AccAmount } from './AccAmount'
import { FaEye } from 'react-icons/fa';
import { AccountHeader } from './AccountHeader';

export const Account = ({UserID, AccountType, AccountID, AccountBalance}) => { 
    const [toggle, SetToggle] = useState(false)
    const onView = () => {
        SetToggle(!toggle)
    }
  return (
    <div className="Account-Contrainer-Flex">
        <div className="Account-Container">
            <AccountHeader
                AccountType={AccountType}
                AccountID={AccountID}
                onView={onView}
            />
            {
                toggle ? 
                    <AccAmount 
                    AccountBalance = {AccountBalance}
                    SetToggle ={SetToggle}
                    /> 
                    :
                    <></>
            }
            
        </div>
    </div>
  )
}
