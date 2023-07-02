import React from 'react';
import { Link } from 'react-router-dom';
import { Container,Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { FaShoppingCart,FaRegHeart,FaEye } from 'react-icons/fa';
import { useState, useEffect } from 'react';


const ProductList = ({addCount}) =>{
    const [count, setCount] = useState(0);
    const [tval, setformvalue] = useState('');

    const [prodData, setProdData] = useState([]);

    let checkoutItems = sessionStorage.getItem('checkoutItems');

    if (!checkoutItems) {
        checkoutItems = [];
    } else {
        try {
            checkoutItems = JSON.parse(checkoutItems);
        } catch (error) {
            console.error('Invalid JSON data in sessionStorage: ', error);
            checkoutItems = [];
        }
    }

    const fetchProductInfo = () => { 
        return fetch(`https://harunor-rashid-openshop-backend-v2.onrender.com`) 
          .then((responseData) => responseData.json()) 
          .then((jsonData) => setProdData(jsonData)) 
    }
  
    useEffect(() => {
        fetchProductInfo();
    }, [])

    const wishList = () =>{
        alert ("Thanks ! Added your inbox and Next time welcome");
    }
    
    const handleAddClick = (product) =>{
        setCount(count+1);
        addCount(count);    
        checkoutItems = [...checkoutItems, product];
        sessionStorage.setItem('checkoutItems', JSON.stringify(checkoutItems));
        checkoutItems = JSON.parse(sessionStorage.getItem('checkoutItems'));
    }
    
    return (
    <Container>
       
        <Row xs={2} md={3} lg={4} className="g-4">
                {prodData.map(element => {
                return(
                    <div style={{padding:'5px'}}>
                        <Card style={{minHeight:'420px',maxHeight:'440px'}}>
                            <Card.Img variant="top" src={element.imgLink} />
                            <Card.Body>
                            <Card.Title>{element.name}</Card.Title>
                            <Card.Title>TK {element.price}</Card.Title>
                            <Card.Text>
                            {element.desc}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <Button size="sm" variant='outline-info' onClick={wishList}><FaRegHeart /></Button>&nbsp;&nbsp;&nbsp;
                            <Button variant="outline-warning" onClick={() => handleAddClick(element)} onClickCapture={()=> setformvalue(`${element._id}`)} size="sm"><FaShoppingCart/></Button>
                            &nbsp;&nbsp;&nbsp;
                            <Button  size="sm" variant="outline-success"><Link to={`/productDetails/${element._id}`}><FaEye/></Link></Button>
                            </Card.Footer>
                        </Card>
                    </div>
                )
            })} 
        </Row>
    </Container>
  );
}

export default ProductList;