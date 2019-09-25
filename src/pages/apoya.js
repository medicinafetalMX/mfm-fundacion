import React from "react";
import SectionTitle from "../components/SectionTitle";
import Layout from "../components/layout";
import SEO from "../components/seo";

import facebook from "../images/facebook.svg"
import instagram from "../images/instagram.svg"

const SupportPage = () => (
  <Layout>
    <SEO title="Cómo apoyar" />
    <div className="content-body support-page">
      <SectionTitle title="Cómo apoyar" />
      <p>Deseas apoyar a una familia para que regresen con su bebé en brazos a casa?</p>
      <p>
        ¡Contáctanos! Escribe un mail a <a className="secondary-link" href="mailto:contacto@fundacionmfm.com?Subject=Nueva%20Pregunta">contacto@fundacionmfm.com</a> o llámanos al 442 195 7014.

      </p>

      <div className="row button-container">
        <a className="button button-cta" href="mailto:contacto@fundacionmfm.com?Subject=Nueva%20Pregunta">Enviar Correo Electrónico</a>
        <a className="button button-cta" href="tel:4421957014">Llamar vía Teléfono</a>
      </div>
      <br/>
      <p>
        No olvides de seguirnos en nuestras redes sociales:
      </p>
      <div className="social-media-container">
        <a href="https://facebook.com">
          <img src={facebook} alt="Visítanos en Facebook" />
        </a>
        <a href="https://instagram.com">
          <img src={instagram} alt="Visítanos en Instagram" />
        </a>
      </div>
    </div>
  </Layout>
)

export default SupportPage;