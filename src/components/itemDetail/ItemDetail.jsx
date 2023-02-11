import { doc, getDoc } from 'firebase/firestore/lite';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
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
      setItemToShow(docSnap.data());
    }
    getItems();
  }, [id])

  return (
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
    </ItemCard>
  );
}