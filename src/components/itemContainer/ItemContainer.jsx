import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import ItemCard from '../itemCard/ItemCard';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { getDocs, query, where } from 'firebase/firestore/lite';
import { dbProducts } from '../firebase/Firebase';
const urlImg = '/assets/img/'

const ItemContainer = () => {
  const [itemsToShow, setItemsToShow] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { idCategory } = useParams();

  useEffect(() => {
    // detecta cambio de ruta
    setFilterItems({ idCategory })
    setIsLoading(true);
  }, [idCategory]);

  useEffect(() => {
    const getItems = async () => {
      const itemsToSet = [];
      let q = query(dbProducts);
      if (filterItems.idCategory) {
        q = query(q, where("idCategory", "==", parseInt(filterItems.idCategory)));
      };
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(e => {
        itemsToSet.push({ ...e.data(), id: e.id });
      })
      setItemsToShow(itemsToSet);
      setIsLoading(false);
    }

    getItems();
  }, [filterItems])

  return (
    <>
      <Row className='m-4' xs={1} sm={3} lg={4}>
        {isLoading
          ? (
            <Spinner></Spinner>
          )
          : (
            itemsToShow.map(item => {
              return (
                <ItemCard
                  key={item.id}
                  id={item.id}
                  idProduct={item.idProduct}
                  title={item.description}
                  image={urlImg + item.image}
                  price={item.price}
                  stock={item.stock}
                  fluid
                ></ItemCard>
              )
            })
          )}
      </Row>
    </>
  )
}

export default ItemContainer