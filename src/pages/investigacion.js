import React from "react";
import SectionTitle from "../components/SectionTitle";
import Layout from "../components/layout";
import SEO from "../components/seo";

import male from "../images/male-doctor.jpg";
import female from "../images/female-doctor.jpg";

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
        <div className="doctor">
          <img src={male} alt=""/>
          <div className="name">Dr. Rogelio Cruz Martínez, MD, PhD.</div>
        </div>
        <div className="doctor">
          <img src={female} alt="" />
          <div className="name">Dra. Mónica Cruz Lemini, MD, PhD.</div>
        </div>
        <div className="doctor">
          <img src={female} alt="" />
          <div className="name">Dra. Eréndira Chávez, MD, PhD.</div>
        </div>
        <div className="doctor">
          <img src={male} alt="" />
          <div className="name">Dr. Daniel Saldívar</div>
        </div>
        <div className="doctor">
          <img src={male} alt="" />
          <div className="name">Dr. Jonathan Luna</div>
        </div>
      </div>
    </div>
  </Layout>
)

export default InvestigationPage;