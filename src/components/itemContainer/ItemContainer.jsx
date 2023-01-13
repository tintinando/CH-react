import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCard from '../itemCard/ItemCard';
import ProductsData from '../db/products.json'
const urlImg = '/assets/img/'

const getCards = () => {
  let items = ProductsData.map((item, index) => {
    return (
      <Col key={index}>
        <ItemCard          
          title={item.description}
          image={urlImg + item.image}
          price={item.price}
          stock={item.stock}
        ></ItemCard>
      </Col>
    )
  })
  return items;
}

const ItemContainer = () => {
  return (
    <>
      <Container className='m-5'>
        <Row>
          {getCards()}
        </Row>
      </Container>
    </>
  )
}

export default ItemContainer