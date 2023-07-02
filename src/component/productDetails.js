import React from "react"
import '../App.css';
import {Link, useParams } from 'react-router-dom';
import { Container,Button,Row,Col,Card,Image } from 'react-bootstrap';
import { FaRegHeart,FaShareAltSquare } from 'react-icons/fa';
import ProductList from "../component/productList";
import { useState, useEffect } from 'react';

const ProductDc = () =>{;
    const params = useParams();
    const [item, setItem] = useState([])
    const fetchProductdetInfo = () => { 
    return fetch(`https://harunor-rashid-openshop-backend-v2.onrender.com/product/${params.id}`) 
            .then((responseData) => responseData.json()) 
            .then((jsonData) => setItem(jsonData)) 
    }
    
    useEffect(() => {
        fetchProductdetInfo();
    }, [])

    return(
        <Container>
            <Row>
                <Col sm={4}>
                    <Card>
                        <Image className="zoom" src={item.imgLink} thumbnail />
                    </Card>
                </Col>
                <Col sm={5}>
                    <Card>
                        <h3>{item.name}</h3>
                        <hr/>
                        <text style={{padding:'20px', textAlign:'justify',fontFamily:'Roboto'}}>{item.desc}</text>
                        <Card.Body>
                            <Button  size="sm" variant='outline-info'><FaRegHeart /></Button>
                            &nbsp;&nbsp;&nbsp;
                            <Button variant="outline-primary"  size="sm"><FaShareAltSquare/></Button>
                            <hr/>
                            <Card.Title style={{backgroundColor:'#990088', padding:'10px',color:'#ffffff'}}>Promot this product and enjoy saving up to 60% </Card.Title>
                            <input type="text" placeholder="Input your promo code"/>
                            <br/> 
                            <p>Price: TK-{item.price}</p>             
                        </Card.Body>
                        <Card.Footer>
                            <Button><Link to={`/Checkout/`} style={{color:'#fff',textDecoration:'none'}}>Buy Now</Link></Button>  &nbsp; &nbsp;<Button variant="warning"><Link to={`/addTocard/${item._id}`} style={{color:'#fff',textDecoration:'none'}}>Add to Card</Link></Button>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card>
                        <Card.Header>
                            <b>Product Reviews</b>
                        </Card.Header>
                        <Card.Body>
                            <p>4.8 Out off 5</p>
                        </Card.Body>
                        <Card.Header>
                            <b>Reviews Comments</b>
                        </Card.Header>
                        <Card.Body>
                            <p>This is Good Product</p>
                            <p>Almost 2 month ago purchase and use it best product</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12}>
                    <hr/>
                    <div>
                        <h4>Related Products</h4>
                        <ProductList/>
                        <br/><br/>
                    </div>
                </Col>
            </Row>
        </Container>
    )  
}

export default ProductDc