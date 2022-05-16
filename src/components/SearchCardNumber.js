import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { baseUrl } from "../URL/AppConstants";
import Logout from "./Logout";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

function SearchCardNumber() {
  const [transactions, setTransactions] = useState([]);
  const [cardNumber, setCradNumber] = useState("");

  const [searchErrors, setSearchErrors] = useState({});

  const handleChange = (event) => {
    setCradNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    let errors = {};
    if (!cardNumber) {
      errors["cardNumberErr"] = " *CARD NUMBER IS REQUIRED";
    }
    setSearchErrors(errors);

    const noErrors = Object.keys(errors).length === 0;
    if (noErrors) {
      axios
        .get(
          baseUrl+"transaction/getalltransaction/" +
            cardNumber
        )
        .then((resp) => setTransactions(resp.data))
        .catch(error =>  alert(error.response.data));
    }
  };
  return (
    <Container>
      <Logout />
      <Row>

<Col className="transaction">
    <div className="container-fluid">
      
      <div className='form-group'>
        <label><b><i>CARD NUMBER</i></b></label>
        <input
          type="number"
          name="cardNumber"
          value={cardNumber}
          onChange={handleChange}
        />
        <button  className="go" onClick={handleSubmit}>GO</button>

        {searchErrors.cardNumberErr && (
          <div style={{ color: "red", paddingBottom: 10 }}>
            {searchErrors.cardNumberErr}
          </div>
          
        )}
      </div>
     
      <div>
        {transactions.length < 0 ? (
          <div>
            <h2> no transaction found!</h2>
          </div>
        ) : (
          <div className="container-fluid">
            <h2 style={{ color: "red" }}>
              <center>
               <h2><b><i>Transactions</i></b></h2>
              </center>
            </h2>
            <table className="table table-striped ">
              <thead className="color">
                <tr>
                  <th>SNO</th>
                  <th>ID </th>
                  <th> DATE</th>
                  <th>AMOUNT </th>
                  <th>STATUS </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td style={{ color: "orange" }}><b>{t.transactionId}</b></td>
                    <td style={{ color: "blue" }}><b>{t.transactiondate}</b></td>
                    <td style={{ color: "red" }}><b>{t.amount}</b></td>
                    <td id="color"><b>{t.status}</b></td>
                  </tr>
                ))}
              </tbody>
            </table>
           
          </div>
        )}
      </div>
    </div>
    </Col>
    </Row>
    </Container>
  );
}
export default SearchCardNumber;
