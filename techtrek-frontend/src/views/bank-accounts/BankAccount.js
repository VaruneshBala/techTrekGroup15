import React from 'react'
import { useSelector } from 'react-redux'

export const BankAccount = () => {
  const acc = useSelector((state) => state.users.userId)
  
  return (
    <div>
        <h1>
            This is the bank account page.
        </h1>
    </div>
  )
}
