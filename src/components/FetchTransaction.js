import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { baseUrl } from "../URL/AppConstants";
import {  Container,  Row } from "react-bootstrap";
import AdminLogout from "./AdminLogout";

function FetchTransaction() {
  const [transaction, setTransaction] = useState(null);
  const { id } = useParams();
  const fetchTransactionById = () => {
    axios
      .get(baseUrl + "transaction/gettransaction/" + id)
      .then((resp) => setTransaction(resp.data));
  };
  useEffect(fetchTransactionById, []);
  return (
    <Container>
      <AdminLogout />
      <Row className="viewtransaction">
        <div>
          <h1> <b>TRANSACTION DETAILS</b></h1>
          <hr />

          {transaction !== null && (
            <div>
              <h3 style={{ color: "white" }}>
              ID: <b style={{ color: "rgb(79, 231, 229)" }}>  {transaction.transactionId}</b>
              </h3 >
              <h3 style={{ color: "white" }}>
              
              DATE : <b style={{ color: "rgb(79, 231, 229)" }}>  {transaction.transactiondate}</b>
              </h3>
              <h3 style={{ color: "white" }}>
              AMOUNT : <b style={{ color:"rgb(79, 231, 229)" }}> {transaction.amount}</b>
              </h3>
              <h3 style={{ color: "white" }}>
               
              STATUS :  <b style={{ color: "rgb(79, 231, 229)" }}>  {transaction.status}</b>
              </h3>
            </div>
          )}
        </div>
      </Row>
    </Container>
  );
}
export default FetchTransaction;
