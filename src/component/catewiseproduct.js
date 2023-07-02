import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container,Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { FaShoppingCart,FaRegHeart,FaEye } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Plist =[
    {
        id:1,
        cateId:1,
        name: 'Silk Dress',
        price: 2000,
        img: '/wo1.jpg',
        desc: 'This very good product'
    },
    {
        id:2,
        cateId:2,
        name: 'Bett Show',
        price: 1500,
        img: '/wo4.jpg',
        desc: 'Roleg-99, made in japan'
    },
    {
        id:3,
        cateId:2,
        name: 'Tea Shart',
        price: 1200,
        img: '/wo3.jpg',
        desc: 'This very good product'
    },
    {
        id:4,
        cateId:3,
        name: 'Bag moll33',
        price: 30000,
        img: '/wo2.jpg',
        desc: 'Model-2023, Color-Black, Waight-230 L'
    },
    {
        id:5,
        cateId:3,
        name: 'Kathan-Raj',
        price: 30000,
        img: '/wo5.jpg',
        desc: 'Model-2023, Color-Black, Waight-230 L'
    }
   
]
const CateProductList = () =>{
    const lock = useNavigate()
    const [count, setCount] = useState(0);
    const [tval, setformvalue] = useState('')

    useEffect(()=>{
        console.log(`this ${tval} is test ${count}`);
    },[count])

    return (
    <Container>
        <Row xs={2} md={3} lg={4} className="g-4">
                {Plist.map(element => {
                return(
                    <div style={{padding:'5px'}}>
                        <Card style={{minHeight:'420px',maxHeight:'420px'}}>
                            <Card.Img variant="top" src={element.img} />
                            <Card.Body>
                            <Card.Title>{element.name}</Card.Title>
                            <Card.Title>TK {element.price}</Card.Title>
                            <Card.Text>
                            {element.desc}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <Button  size="sm" variant='outline-info'><FaRegHeart /></Button>&nbsp;&nbsp;&nbsp;
                            <Button variant="outline-warning" onClick={()=>setCount(count+1)} onClickCapture={()=> setformvalue(`${element.id}`)} size="sm"><FaShoppingCart/></Button>
                            &nbsp;&nbsp;&nbsp;
                            <Button  size="sm" variant="outline-success"><Link to={`/productDetails/${element.id}`}><FaEye/></Link></Button>
                            </Card.Footer>
                        </Card>
                        <br/><br/><br/><br/>
                    </div>
                )
            })} 
        </Row>
    </Container>
  );
}

export default CateProductList;