import React, { useState } from 'react'
import { AccAmount } from './AccAmount'
import { AccountHeader } from './AccountHeader'

export const Account = ({UserID, AccountType, AccountID, AccountBalance}) => { 
    const [toggle, SetToggle] = useState(false)
  return (
    <div className="Account-Contrainer-Flex">
        <div className="Account-Container">
            <AccountHeader 
                AccountType = {AccountType} 
                AccountID = {AccountID}
            />
            {
                toggle ? 
                    <AccAmount 
                    AccountBalance = {AccountBalance}
                    /> 
                    :
                    <></>
            }
            
        </div>
    </div>
  )
}
