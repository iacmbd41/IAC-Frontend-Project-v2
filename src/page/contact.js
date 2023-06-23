import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';
const Contact = () =>{
    return(
        <Container>
            <Row>
                <Col sm={7}>
                    <img src='./pngtree-climbing.jpg'/>
                </Col>
                <Col sm={5}>
                    <ul style={{padding:'10px',border:'1px solid #ddd',minHeight:'500px'}}>
                        <p>Contact any way</p>
                        <hr/>
                        <br/>
                        <br/>
                        <li className="liStyle"> <label><b>Mob-no</b> : +880 10001000</label></li>
                        <li className="liStyle"> <label><b>Phone</b> : +88 22222220</label></li>
                        <li className="liStyle"><label><b>Email</b> : demo@demo.com</label></li>
                        <li className="liStyle"> <label><b>Address</b> : Level: #3, House: #19, Road: #68, Gulshan-2, Dhaka-1212</label></li>
                        <br/>
                        <br/>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact