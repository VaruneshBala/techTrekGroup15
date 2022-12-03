import React from 'react'

export const AccountHeader = ({AccountType, AccountID}) => {
  return (
      <div className = "AccountHeader">
          <div>{AccountType} : {AccountID}</div>
      </div>
  )
}
