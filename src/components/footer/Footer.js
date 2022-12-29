import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationPin,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <MDBFooter
      className="text-center text-lg-start text-muted square border-top border-dark"
    >

      <section className="">
        <MDBContainer className="text-center text-white text-md-start mt-5">
          <MDBRow className="mt-3">

            {/* Primer columna: descripción} */}
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Home Ron
              </h6>
              <p>
                Tienda de bebidas de todo tipo. Hacemos envíos en el barrio de San Cristóbal. El mejor precio del mercado. Un golazo.
              </p>
            </MDBCol>

            {/* Segunda columna: productos */}
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Productos</h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Bebidas
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Parafernalia
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Bolsas para regalo
                </a>
              </p>
            </MDBCol>

            {/* Tercera columna: enlaces útiles */}
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Enlaces útiles</h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Quiénes somos
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Búsqueda
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Mis órdenes
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  P+F
                </a>
              </p>
            </MDBCol>

            {/* Cuarta columna: contacto */}
            <MDBCol md="4" lg="3" xl="4" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
              <p>
                <FontAwesomeIcon icon={faLocationPin} className="me-2" />
                San Cristóbal, CABA, Argentina
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                bebidashomeron@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faWhatsapp} className="me-3" /> +5491150500147
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
};

export default Footer;