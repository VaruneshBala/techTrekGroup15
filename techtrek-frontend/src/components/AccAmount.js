import React from 'react'
import { FaEye } from 'react-icons/fa';

export const AccAmount = ({AccountBalance, SetToggle}) => {
  return (
    <div className="AccountBalance">
        Current Balance: {AccountBalance}
    </div>
  )
}
