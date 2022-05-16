
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { baseUrl } from "../URL/AppConstants";
import Logout from './Logout';

function Cardtypes() {
    const [creditcards, setCreditCards] = useState([]);
    const fetchAll = () => {
        axios
            .get( baseUrl+"creditcard/getAll")
            
            .then(resp => setCreditCards(resp.data));
    }
    useEffect(fetchAll, []);
    return (
<Container >
    <Logout />
    <Row className='cardtypes'>
        <div className='cards'>
            <h2 style={{ color: "blue" }}><b> <i>CREDITCARD TYPES</i></b> </h2>
            <div class="row row-cols-1 row-cols-md-2 g-4">

                {
                    creditcards.length > 0 &&

                    creditcards.map((c, index) =>
                        <div >

                            <div class="col">

                                <img src="creditcard1.jpg" class="card-img" alt="creditcard"/>
                                <div class="card-body">
                                    <div className='CardStyle'>
                                        <h5 style={{ color: "white" }}><b><i>{c.type}-Card</i></b></h5>
                                        <p><i><b>JOININGFEE :</b> {c.joiningfee}</i> </p>
                                        <p> <i><b>ANNULFEE :</b> {c.annulfee}</i> </p>
                                        <p> <i><b>LIMIT :</b> {c.limit}</i></p>
                                        <Link to='/buy'><button className='buy'><b><i></i>BUY</b></button></Link>
                                    </div>
                                </div>
                            </div>

                        </div>

                    )

                }
            </div>
        </div>
        </Row>
        </Container>
    );
}
export default Cardtypes;