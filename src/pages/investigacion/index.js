import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import DoctorCard from "../../components/DoctorCard";

import rogelio from "../../images/DrRogelio.png";
import monica from "../../images/DraMonica.png";
import erendira from "../../images/DraErendira.png";
import miguel from "../../images/DrMiguel.png";

const InvestigationPage = () => (
  <Layout>
    <SEO title="Investigación" />
    <div className="content-body investigation-page">
      <SectionTitle title="Investigación" />
      <p>
        Una de nuestros objetos sociales es realizar investigación, lo cual nos permite estar a la vanguardia en los temas de medicina fetal, así como apoyar a nuestros médicos investigadores a crear conocimiento nuevo.
      </p>
      <p>
        Conoce a nuestros Investigadores:
      </p>

      <div className="doctors-grid">
        <DoctorCard 
          img={rogelio} 
          name="Dr. Rogelio Cruz Martínez, MD, PhD."
          linkTo="/investigacion/RogelioCruz"
        />
        <DoctorCard 
          img={monica} 
          name="Dra. Mónica Cruz Lemini, MD, PhD." 
          linkTo="/investigacion/MonicaCruz"
        />
        <DoctorCard 
          img={miguel} 
          name="Dr. Miguel Martínez Rodríguez, MD, PhD." 
          linkTo="/investigacion/MiguelMartinez"
        />
        <DoctorCard 
          img={erendira} 
          name="Dra. Eréndira Chávez González, MD, PhD."
          linkTo="/investigacion/ErendiraChavez"
        />
      </div>
    </div>
  </Layout>
)

export default InvestigationPage;