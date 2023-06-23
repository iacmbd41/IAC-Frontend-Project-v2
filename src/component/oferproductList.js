import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container,Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { FaShoppingCart,FaRegHeart,FaEye } from 'react-icons/fa';
import { useState, useEffect } from 'react';


const OferProductList = () =>{
    const [prodData, setProdData] = useState([])
    const fetchProductInfo = () => { 
        return fetch('http://localhost:7070') 
        .then((responseData) => responseData.json()) 
        .then((jsonData) => setProdData(jsonData)) 
    }

    useEffect(() => {
        fetchProductInfo();
    }, [])

    const lock = useNavigate()
    const [count, setCount] = useState(0);
    const [tval, setformvalue] = useState('')

    useEffect(()=>{
        console.log(`this ${tval} is test ${count}`);
    },[])

    return (
    <Container>
        <Row xs={2} md={3} lg={4} className="g-4">
                {prodData.map(element => {
                return(
                    <div style={{padding:'5px'}}>
                        <Card style={{minHeight:'420px',maxHeight:'420px'}}>
                            <Card.Img variant="top" src={element.imgLink} />
                            <Card.Body>
                            <Card.Title>{element.name}</Card.Title>
                            <Card.Title>TK {element.price}</Card.Title>
                            <Card.Text>
                            {element.desc}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <Button  size="sm" variant='outline-info'><FaRegHeart /></Button>&nbsp;&nbsp;&nbsp;
                            <Button variant="outline-warning" onClick={()=>setCount(count+1)} onClickCapture={()=> setformvalue(`${element._id}`)} size="sm"><FaShoppingCart/></Button>
                            &nbsp;&nbsp;&nbsp;
                            <Button  size="sm" variant="outline-success"><Link to={`/productDetails/${element.id}`}><FaEye/></Link></Button>
                            </Card.Footer>
                        </Card>
                    </div>
                )
            })} 
        </Row>
    </Container>
  );
}

export default OferProductList;