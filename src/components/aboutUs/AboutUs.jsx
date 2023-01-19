import React, { useEffect } from 'react';
import './AboutUs.css'
import { Col, Container, Image, Row } from 'react-bootstrap';

export default function AboutUs() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 200,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  useEffect(() => {
    scrollToTop();
  }, [])

  return (
    <Container className='m-5'>
      <Row>
        <Col>
          <h2>Quiénes somos</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nam voluptas, expedita possimus nobis in, accusamus corporis, consequatur quis asperiores qui assumenda dicta recusandae nihil libero mollitia distinctio. Dolore, illo?
            Minima sapiente blanditiis deleniti magnam error praesentium eius exercitationem assumenda ratione molestiae neque similique debitis fugiat quis, nihil ullam inventore architecto necessitatibus maiores natus laborum dignissimos veniam! Nisi, quas atque.
            Praesentium, aspernatur animi repudiandae ea blanditiis rem laudantium ullam veritatis iusto culpa modi mollitia! Quibusdam voluptates blanditiis nemo sint excepturi temporibus, quod tenetur consequatur ut odit deserunt quam eaque corporis?
            Obcaecati consectetur voluptatum, ipsa harum facilis incidunt. Perferendis cum voluptatem consectetur illum vitae quae possimus quas optio doloribus ullam nemo sint tempora vel architecto voluptates, itaque consequuntur iusto accusantium veritatis!
            Sit perspiciatis deserunt deleniti facilis unde fuga natus tenetur odit nemo? Cupiditate sapiente molestias qui, incidunt illum nam iusto amet assumenda expedita eligendi? Corporis non hic nemo dolorem, eaque obcaecati.
          </p>
        </Col>
        <Col>
          <Image src='/assets/img/aboutUs.jpg' rounded>
          </Image>
        </Col>
      </Row>
    </Container>
  )
}
