import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCard from '../itemCard/ItemCard';
import ProductsData from '../db/products.json'
import { useParams } from 'react-router-dom';
const urlImg = '/assets/img/'

const getCards = (filter) => {
  let filteredProducts = ProductsData.filter(e => {
    const isFilteredCat = filter.idCategory && JSON.stringify(e.idCategory) === filter.idCategory;
    const isFilteredId = filter.idProduct && JSON.stringify(e.idProduct) === filter.idProduct;
    return isFilteredCat || isFilteredId;
  });

  if (filteredProducts.length === 0) filteredProducts = [...ProductsData];

  let items = filteredProducts.map((item, index) => {
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
  const { idCategory, idProduct } = useParams();
  return (
    <>
      <Container className='m-5'>
        <Row>
          {getCards({ idCategory, idProduct })}
        </Row>
      </Container>
    </>
  )
}

export default ItemContainer