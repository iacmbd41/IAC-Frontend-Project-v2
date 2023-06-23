import * as React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CategoryList = () => {
  const [prodCateData, setProdCateData] = useState([])
    const fetchProCategoryInfo = () => { 
        return fetch('http://localhost:7070/productcategory') 
          .then((responseData) => responseData.json()) 
          .then((jsonData) => setProdCateData(jsonData)) 
    }
  
    useEffect(() => {
      fetchProCategoryInfo();
    }, [])
console.log(prodCateData);

  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={6}>
          {prodCateData.map(element => {
              return(
                <ListGroup>
                  <ListGroup.Item action href={element.cId}>
                    <Link style={{fontWeight:'400',fontFamily: 'revert'}} class="nav-link" to={`/catelistTab`}>{element.ProductCategory}</Link>
                  </ListGroup.Item>
                </ListGroup>
              )
            })} 
        </Col>
        <Col sm={6}></Col>
      </Row>
    </Tab.Container>
  );
}

export default CategoryList;