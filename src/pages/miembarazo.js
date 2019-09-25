import React from "react";
import SectionTitle from "../components/SectionTitle";
import Layout from "../components/layout";
import SEO from "../components/seo";

import dra from "../images/dra-alma.png";

const PregnancyPage = () => (
  <Layout>
    <SEO title="Mi Embarazo" />
    <div className="content-body pregnancy-page">
      <SectionTitle title="Mi Embarazo" />
      <div className="row">
        <img src={dra} alt="Dra. Alma Gamez Varela"/>
        <div className="content">
          <p>
            La Dra. Alma Gámez presidenta de la Fundación, es columnista de la prestigiosa revista Serendipia, conoce sus artículos aquí:
          </p>
          <br/>
          <a href="https://www.revistaserendipia.com/ciencia/salud-prenatal/" target="_blank" className="button button-cta">Ver los artículos</a>
        </div>
      </div>
    </div>
  </Layout>
)

export default PregnancyPage;