import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { dbWelcome, randomKey } from '../firebase/Firebase';
import { getDocs, limit, query, where } from 'firebase/firestore/lite';

const WelcomePhrases = () => {
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setLoading(true);

    const myPhrase = async () => {
      const q = query(dbWelcome, where("randomKey", ">=", randomKey()), limit(1));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(e => {
        setCurrentPhrase(e.data().phrase);
      })
      setLoading(false);
    };

    myPhrase();
  }, [refresh])

  return (
    <Container className='d-flex flex-row mt-3'>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <>
          <p style={{ color: "white" }}>{currentPhrase}</p>
          <FontAwesomeIcon
            onClick={() => setRefresh(!refresh)}
            style={{ height: "1rem", margin: "0.25rem 0.5rem" }}
            icon={faRotateLeft} />
        </>
      )
      }
    </Container>
  )
}

export default WelcomePhrases;