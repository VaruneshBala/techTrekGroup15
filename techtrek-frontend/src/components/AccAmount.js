import React from 'react'


export const AccAmount = ({AccountBalance, SetToggle}) => {
  return (
    <div>
        <h4 className="AccountBalance">
            Current Balance: {AccountBalance}
        </h4>
        <a href='/transaction' className="trans_btn">Transfer Money</a>
    </div>
  )
}
