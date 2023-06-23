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
        name: 'Watch',
        price: 20000,
        img: '/watch.jpg',
        desc: 'Roleg-99, made in japan'
    },
    {
        id:2,
        name: 'Mobile',
        price: 20000,
        img: '/mobile.jpg',
        desc: 'This very good product'
    },
    
    {
        id:3,
        name: 'Laptop',
        price: 120000,
        img: '/apple.jpg',
        desc: 'This very good product'
    },
    {
        id:4,
        name: 'Freadge',
        price: 36000,
        img: '/freadge.png',
        desc: 'Model-2023, Color-Black, Waight-230 L'
    },
    {
        id:5,
        name: 'Mobile',
        price: 20000,
        img: '/mobile.jpg',
        desc: 'This very good product'
    },
    {
        id:6,
        name: 'Laptop',
        price: 120000,
        img: '/apple.jpg',
        desc: 'This very good product'
    }
]
const StdProductList = () =>{
    const lock = useNavigate()
    const [count, setCount] = useState(0);
    const [tval, setformvalue] = useState('')

    useEffect(()=>{
        console.log(`this ${tval} is test ${count}`);
    })
    // const handleClick = () =>{
    //     lock('./productDetails')
    // }
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
                    </div>
                )
            })} 
        </Row>
    </Container>
  );
}

export default StdProductList;