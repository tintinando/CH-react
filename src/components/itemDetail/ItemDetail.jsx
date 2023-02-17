import { doc, getDoc } from 'firebase/firestore/lite';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/Firebase';
import ItemCard from '../itemCard/ItemCard';
import './ItemDetail.css'

export default function ItemDetail(props) {
  const { idProduct: id } = useParams();
  const [itemToShow, setItemToShow] = useState([]);
  const urlImg = "/assets/img/"
  const navigate = useNavigate();

  useEffect(() => {
    const getItems = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setItemToShow(docSnap.data());
      }
    }
    getItems();
  }, [id])

  return (
    <>
      {itemToShow.length === 0
        ? (
          <Container className='d-flex  flex-column m-5'>
            <h2>El producto no existe</h2>
            <LinkContainer to="/"><a href="/">Buscar uno que sí exista</a></LinkContainer>
          </Container>
        )
        : (
          <ItemCard
            className="col-10"
            key={itemToShow.id}
            id={itemToShow.id}
            idProduct={itemToShow.idProduct}
            title={itemToShow.description}
            image={urlImg + itemToShow.image}
            price={itemToShow.price}
            stock={itemToShow.stock}
            fluid
          >
            <Button
              className='usr-back'
              onClick={() => { navigate(-1) }}
            >Volver</Button>
          </ItemCard >
        )
      };
    </>
  )
}
