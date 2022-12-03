import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import JsonData from "./ScheduledTransactions.json";
import { TbTrash } from "react-icons/tb";
import ReactDeleteRow from 'react-delete-row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { renderMatches, useParams } from "react-router-dom";
import axios from 'axios'

function BasicExample() {
  const [accountID, setAccountID] = useState([])
  useEffect(() => {
    axios.get("https://flask-production-7a20.up.railway.app/account/4")
    .then((response) => {
      const result = [...response.data.data.bank_account]
      setAccountID(result)
      console.log(accountID)
    })
  }, [])

  const array = accountID.map((item) => {
    return(<option>{item.AccountID}</option>)
  })

  const [receivingID, setReceivingID] = useState('')
  const [selectedAccountID, setSelectedAccountID] = useState('')
  const [date, setDate] = useState(new Date())
  const [transactionAmount, setTransactionAmount] = useState('')
  const [comment, setComment] = useState('')

  const insertTransaction = () => {
    let param = {
      "AccountID": selectedAccountID,
      "Date": date,
      "ReceivingAccountID": receivingID,
      "TransactionAmount": transactionAmount,
      "Comment": comment
    }
    axios.put("https://flask-production-7a20.up.railway.app/transactions/", param)
    .then((response) => {
      console.log("success")
    })
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formAccountId">
        <Form.Label>Account ID</Form.Label>
        <Form.Select 
          value={selectedAccountID}
          aria-label="AccountID"
          onChange={(e) => setSelectedAccountID(e.target.value)}
        >
          {array}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formReceivingAccountId">
        <Form.Label>Receiving Account ID</Form.Label>
        <Form.Control 
          value={receivingID}
          aria-label="ReceivingID"
          onChange={(e) => setReceivingID(e.target.value)}
        >
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="date">
      <Form.Label>Date</Form.Label>
        <Form.Control 
          value={date}
          aria-label="date"
          onChange={(e) => setDate(e.target.value)}
        >
        </Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formTransactionAmount">
        <Form.Label>Transaction Amount</Form.Label>
        <Form.Control 
          value={transactionAmount}
          aria-label="transactionAmount"
          onChange={(e) => setTransactionAmount(e.target.value)}
        >
        </Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formComment">
        <Form.Label>Comment</Form.Label>
        <Form.Control 
          value={comment}
          aria-label="comment"
          onChange={(e) => setComment(e.target.value)}
        >
        </Form.Control>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;

