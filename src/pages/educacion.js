import React from "react";
import SectionTitle from "../components/SectionTitle";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PrimaryHeader from "../components/primaryHeader";

import hero from "../images/educacion/cursos.jpg";
import img1 from "../images/educacion/residentes.jpg";
import img2 from "../images/educacion/Invasivos.jpg";
import img3 from "../images/educacion/becado.jpg";

const EducationPage = () => (
  <Layout>
    <SEO title="Educación" />
    <div className="content-body education-page">
      <SectionTitle title="Educación" />
      <div className="hero-image">
        <img src={hero} alt="Fotografía de Curso MFM"/>
      </div>
      <p>
        Estamos orgullosos de todos los médicos mexicanos y extranjeros que desean seguir aprendiendo para mejoras la atención con sus pacientes, nuestro compromiso es con ellos, por lo tanto, les ofrecemos becas para que puedan asistir a los cursos realizados por el equipo de Medicina Fetal México.
      </p>
      <p>
        El día que se publiquen las fechas de los cursos, es el momento para solicitar tu beca.
      </p>
      <p>
        Aprende de la mano de expertos.
      </p>
      <br/>
      <PrimaryHeader title="Oferta Educativa 2020" />
      <p>Esta es nuestra oferta de cursos, talleres y posgrados:</p>
      <div className="courses-list">
        <ul>
          <li>
            Curso práctico de entrenamiento en amniocentesis y biopsia de vellosidades coriales
            <div className="date">Querétaro, 6 y 7 Diciembre 2019</div>
          </li>
          <li>
            Curso básico de diagnóstico prenatal en primer trimestre
            <div className="date">Querétaro, 18 y 19 Enero 2020</div>
          </li>
          <li>
            Taller teórico práctico de Doppler en medicina materno fetal
            <div className="date">Querétaro, 6 y 7 Marzo 2020</div>
          </li>
          <li>
            Cursos básico y avanzado de ecocardiografía fetal
            <div className="date">Querétaro, 22 y 23 Mayo 2020</div>
          </li>
          <li>
            Curso de Alta Especialidad en cirugía fetal
            <div className="date">Querétaro, Enero - Diciembre 2020</div>
          </li>
          <li>
            Posgrado en Medicina Fetal
            <div className="date">Querétaro, 2020, 2021</div>
          </li>
        </ul>
      </div>

      <div className="image-grid">
        <div className="image-container">
          <img src={img1} alt="Residentes MFM"/>
        </div>
        <div className="image-container">
          <img src={img2} alt="Procedimientos" />
        </div>
        <div className="image-container">
          <img src={img3} alt="Solicita una Beca" />
        </div>
      </div>

    </div>
  </Layout>
)

export default EducationPage;