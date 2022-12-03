import React from 'react'
import { FaEye } from 'react-icons/fa';

export const AccountHeader = ({AccountType, AccountID, onView}) => {
  return (
      <div className = "AccountHeader">
            <div>{AccountType} Account ID: {AccountID}</div>
            <div 
                className="View-Button" 
                onClick = {() => onView()}
            >
                <FaEye />
            </div>
          
      </div>
  )
}
