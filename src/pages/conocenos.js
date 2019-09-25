import React from "react";
import SectionTitle from "../components/SectionTitle";
import Layout from "../components/layout";
import SEO from "../components/seo";

import logo from "../images/mfmflogo.png";

const AboutPage = () => (
  <Layout>
    <SEO title="Conócenos" />
    <div className="content-body about-page">
      <SectionTitle title="Conócenos" />
      <p>
        Somos una fundación sin fines de lucro que cuenta con tres objetos sociales : educación médica contínua, investigación, labor social.
      </p>
      <p>
        Proporcionamos atención integral avanzada para el cuidado de la salud y seguridad tanto de la madre como del bebé en vida fetal, por medio de la última tecnología y de nuestro personal altamente calificado.
      </p>
      <p>
        Esta fundación se ha creado con la finalidad de facilitar el acceso al área de la educación otorgando becas a médicos que aún están en formación para que puedan asistir a cursos avanzados de alta especialidad, facilitar también, la información materna, siempre bajo el lema “información en salud” lo que nos ha llevado a crear sesiones con madres para informarles sobre mitos y realidades durante el embarazo y así tengan más apego al seguimiento médico, esto de la mano con realizar ecografías gratuitas a mujeres de escasos recursos para predecir y prevenir multiples patologías y con ello disminuir la morbimortalidad materna e infantil en nuestro México.
      </p>
      <div className="row">
        <img className="logo" src={logo} alt="Fundación Medicina Fetal México"/>
      </div>
    </div>
  </Layout>
)

export default AboutPage;