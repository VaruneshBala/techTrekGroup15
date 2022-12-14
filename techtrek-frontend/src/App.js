import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import { BankAccount } from './views/bank-accounts/BankAccount';
import JsonDataDisplay, { DataTable } from './views/transactionspage/Transactions';
import BasicExample from './views/newtransaction/newtransaction';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { useAuthContext } from './hooks/useAuthContext';

// pages and components
// import BankAccounts from './view/bank-accounts/BankAccounts'
// import Login from './view/login/Login'
import Profile from './views/profile/profile'
import Login from "./views/login/login";
import Signup from "./views/signup/signup";
// import Profile from './view/profile/Profile'
// import Transactions from './view/transactions/Transactions'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <div className="container">
          <Routes>
            <Route
              path='/'
              element={<NavBar />} 
            />
            <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/account" element={<BankAccount />} />
              <Route path="/transactions" element={<JsonDataDisplay />} />
              <Route 
              path='/newtransaction' 
              element={<BasicExample />} 
            />
            {/* <Route
              path='/login'
              element={<Login />} 
            /> */}
            {/* <Route
              path='/account'
              element={<BankAccount />} 
            /> */}
            {/* <Route 
              path='/transactions' 
              element={<JsonDataDisplay />} 
            />
            <Route 
              path='/newtransaction' 
              element={<BasicExample />} 
            />
            {/* <Route 
              path='/profile' 
              element={<Profile />} 
            />
          </Routes>
        </div>
    </Router>
      </header>
    </div>
  );
}

export default App;
