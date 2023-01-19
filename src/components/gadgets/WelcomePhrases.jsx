import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import phrases from '../db/welcomePhrases.json';

const WelcomePhrases = () => {
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setLoading(true);
    const welcomePhrasesFinder = new Promise((resolve) => {
      setTimeout(() => {
        const thisId = Math.floor(Math.random() * phrases.length) + 1;
        resolve(phrases.find(e => e.id === thisId).phrase)
      }, 1000)
    })
    welcomePhrasesFinder.then((param) => {
      setCurrentPhrase(param);
      setLoading(false);
    })
  }, [refresh])

  return (
    <Container className='d-flex flex-row mt-3'>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <>
          <p style={{ color: "white" }}>{currentPhrase}</p>
          <FontAwesomeIcon
            onClick={()=>setRefresh(!refresh)}
            style={{ height: "1rem", margin: "0.25rem 0.5rem" }}
            icon={faRotateLeft} />
        </>

      )

      }



    </Container>
  )
}

export default WelcomePhrases;