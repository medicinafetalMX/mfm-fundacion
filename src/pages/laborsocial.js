import React from "react";
import SectionTitle from "../components/SectionTitle";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PrimaryHeader from "../components/primaryHeader";

import hero from "../images/ultrasound.jpg";

const SocialLaborPage = () => (
  <Layout>
    <SEO title="Labor Social" />
    <div className="content-body social-labor-page">
      <SectionTitle title="Labor Social" />
      <div className="hero-image">
        <img src={hero} alt="Fotografía de Curso MFM" />
      </div>
      <p>
        En nuestra fundación ofrecemos ultrasonidos avanzados Gratuitos para que todas las mujeres embarazadas tengan la oportunidad de ver a su bebé en una alta resolución y que puedan tener un embarazo tranquilo y saludable. 
      </p>
      <br/>
      <PrimaryHeader title="Lo que ofrecemos" />
      <ul>
        <li>Tamizaje de primer trimestre: entre las 11 y catorce semanas de gestación.</li>
        <li>Ecografía estructural : 20- 24 semanas de gestación</li>
        <li>Bienestar fetal: 32- 34 semanas de gestación</li>
        <li>Apoyo para realizar estudio genético</li>
        <li>Apoyo para realizar Cirugía Fetal</li>
      </ul>
    </div>
  </Layout>
)

export default SocialLaborPage;