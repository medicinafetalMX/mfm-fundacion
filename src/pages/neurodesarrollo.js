import React from "react";
import SectionTitle from "../components/SectionTitle";
import Layout from "../components/layout";
import SEO from "../components/seo";

import hero from "../images/neurodesarrollo/neuro3.jpg";
import img1 from "../images/neurodesarrollo/neuro1.jpg";
import img2 from "../images/neurodesarrollo/neuro2.jpg";

const NeuroPage = () => (
  <Layout>
    <SEO title="Neurodesarrollo" />
    <div className="content-body neuro-page">
      <SectionTitle title="Neurodesarrollo" />
      <div className="hero-image">
        <img src={hero} alt="Neurodesarrollo" />
      </div>

      <p>
        La Fundación Medicina Fetal México A.C está comprometida con el desarrollo de tu(s) bebé(s) desde los inicios de su vida hasta la infancia.
      </p>
      <p>
        Mamá y Papá…. Si tus bebés desarrollaron en vida fetal una patología y debido a esto recibieron terapia fetal (Cirugía fetal), comunícate con nosotros si recibiste apoyo de la fundación o la cirugía fetal se realizó en las instalaciones del Hospital del niño y la mujer en Querétaro y conoce todos los beneficios del programa.
      </p>
      <p>
        ¡No te quedes fuera, nos encantaría conocer y saber de ustedes!
      </p>
      <p>
        Los beneficios: <b>El programa incluye un seguimiento del desarrollo psicomotriz: cognitivo, lenguaje, social y motor</b>. Por medio de evaluaciones podemos determinar si tu bebé se encuentra dentro de los limites adecuados del desarrollo, permitiendo obtener un diagnostico e intervención temprana. 
      </p>
      <p>
        El diagnóstico y la atención temprana consisten en proporcionar al bebé y al niño las mejores oportunidades de desarrollo físico, intelectual y social, con el objetivo de que sus capacidades y habilidades se encuentre dentro de los límites normales.
      </p>
      <p>
        <b>¡Importante!</b> Las evaluaciones de seguimiento de neurodesarrollo en las instalaciones de la Fundación son <b>gratuitas</b>.
      </p>

      <div className="image-grid">
        <div className="image-container">
          <img src={img1} alt="Neurodesarrollo" />
        </div>
        <div className="image-container">
          <img src={img2} alt="Neurodesarrollo" />
        </div>
      </div>
    </div>
  </Layout>
)

export default NeuroPage;