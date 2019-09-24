import React from "react"
import PrimaryHeader from "../primaryHeader"
import PrimaryLink from "../primaryLink"

import surgeon from "../../images/surgeon1.png"

const About = () => (
  <section className="about">
    <div className="content-screen">
      <div className="row">
        <img src={surgeon} alt="" className="image-content" />
        <div className="column content-box">
          <PrimaryHeader title="Investigación que salva vidas" />
          <p>
            Una de nuestros objetos sociales es realizar investigación, lo cual nos permite estar a la vanguardia en los temas de medicina fetal, así como apoyar a nuestros médicos investigadores a crear conocimiento nuevo.
          </p>
          <PrimaryLink toPage="/" text="Ir a Investigación" />
        </div>
      </div>
    </div>
  </section>
)

export default About
