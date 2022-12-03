import React from 'react'
import { FaEye } from 'react-icons/fa';

export const AccountHeader = ({AccountType, AccountID, onView}) => {
  return (
      <div className = "AccountHeader">
            <h2>{AccountType} Account ID: {AccountID}</h2>
            <div 
                className="View-Button" 
                onClick = {() => onView()}
            >
                <h2><FaEye /></h2>
            </div>
          
      </div>
  )
}
