import React from 'react'

const NavBar = () => {
  return (
    <div className = 'NavBar'>
        <a href='/' className='btn'>Home</a>
        <a href='/login' className='btn'>SignIn</a>
        <a href='/account' className='btn'>Account Details</a>
        <a href='/transaction' className='btn'>Transaction</a>
        <a href='/profile' className='btn'>Profile</a>
    </div>
  )
}

export default NavBar