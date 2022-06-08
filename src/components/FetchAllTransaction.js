import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../URL/AppConstants";

import AdminLogout from "./AdminLogout";
import { Container, Row } from "react-bootstrap";

function FetchAllTransaction() {
  const [transaction, setTransaction] = useState([]);
  const fetchAll = () => {
    axios
      .get(baseUrl + "transaction/viewalltransaction")
      .then((resp) => setTransaction(resp.data));
  };
  useEffect(fetchAll, []);
  return (
    <Container>
      <AdminLogout />
      <Row>
        <div className="container-fluid ">
          <h1>
            {" "}
            <i>All users's Transaction</i>
          </h1>
          <hr></hr>
          <table className="table table-striped ">
            <thead className="color">
              <tr>
                <th>SNO</th>
                <th>ID </th>
                <th>DATE</th>
                <th>AMOUNT </th>
                <th>STATUS </th>
                <th>CARD NUMBER</th>

                <th>view</th>
              </tr>
            </thead>
            <tbody>
              {transaction.map((t, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{t.transactionId}</td>
                  <td>{t.transactiondate}</td>
                  <td>{t.amount}</td>
                  <td id="color">
                    <b>{t.status}</b>
                  </td>

                  {t.customerCreditCard !== null && (
                    <td>{t.customerCreditCard.cardNumber}</td>
                  )}

                  <td>
                    <Link to={`/transaction/view${t.transactionId}`}>view</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Row>
    </Container>
  );
}
export default FetchAllTransaction;
