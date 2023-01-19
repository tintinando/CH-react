import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCard from '../itemCard/ItemCard';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
const urlImg = '/assets/img/'

const ItemContainer = () => {
  const [itemsToShow, setItemsToShow] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { idCategory, idProduct } = useParams();

  useEffect(() => {
    // detecta cambio de ruta
    setFilterItems({ idCategory, idProduct })
    setIsLoading(true);
  }, [idCategory, idProduct]);

  useEffect(() => {
    const getItems = async () => {
      // consulta API, filtra y modifica estado
      fetch("https://hub.dummyapis.com/vj/NpB8oqt")
        .then(res => res.json())
        .then(data => {
          let filteredProducts = [];
          filteredProducts = Object.values(data[0]).filter((e) => {
            if (!filterItems.idProduct && !filterItems.idCategory) return true;
            const isFilteredCat = filterItems.idCategory && e.idCategory.toString() === filterItems.idCategory;
            const isFilteredId = filterItems.idProduct && e.idProduct.toString() === filterItems.idProduct;
            return isFilteredCat || isFilteredId;
          })
          setItemsToShow(filteredProducts);
          setIsLoading(false);
        })
        .catch((error) => console.error('Falló fetch de productos', error))
    }

    getItems();
  }, [filterItems])

  return (
    <>
      <Container className='m-5'>
        <Row>
          {isLoading
            ? (
              <Spinner></Spinner>
            )
            : (
              itemsToShow.map(item => {
                return (
                  <Col key={item.idProduct}>
                    <ItemCard
                      idProduct={item.idProduct}
                      title={item.description}
                      image={urlImg + item.image}
                      price={item.price}
                      stock={item.stock}
                    ></ItemCard>
                  </Col>
                )
              })
            )}
        </Row>
      </Container>
    </>
  )
}

export default ItemContainer