import React from "react"
import PrimaryHeader from "../primaryHeader"
import PrimaryLink from "../primaryLink"
import StoryCard from "../StoryCard";

import story1 from "../../images/test1.png"
import story2 from "../../images/test2.png"

const Stories = () => (
  <section className="stories">
    <div className="content-screen">
      <PrimaryHeader title="Nos motiva ver crecer la vida" />
      <div className="row">
        <div className="content-box">
          <p>
            A lo largo de nuestra carrera hemos ayudado a que nuestros pacientes puedan disfrutar la vida sin complicaciones.
          </p>
          <PrimaryLink text="Ir a Testimonios" toPage="/testimonios" />
        </div>
        <div className="row">
          <StoryCard
            image={story1}
            name="Rodrigo"
            location="Monterrey, Nuevo León"
            excerpt="Pienso que cada vez más personas deberían saber que existe la medicina fetal, que pueden salvar a sus bebés. Estoy muy agradecida con el doctor Cruz."
          />
          <StoryCard
            image={story2}
            name="Diego"
            location="Morelia, Michoacán"
            excerpt="Cuando conocimos al Dr. Rogelio Cruz y nos propuso realizar la cirugía entendimos que Diego seguiría necesitando atención médica en el futuro pero también que sin la cirugía sus..."
          />
        </div>
      </div>
    </div>
  </section>
)

export default Stories
