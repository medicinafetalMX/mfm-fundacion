import React from "react"
import PrimaryHeader from "../primaryHeader"
import PrimaryLink from "../primaryLink"

const ProceduresBlock = () => (
  <section className="procedures">
    <div className="content-screen">
      <PrimaryHeader title="Prioneros en México, expertos en Medicina Fetal" />
      <p>
        Avanzamos en la investigación de nuevos prodecidmientos:
      </p>
      <div className="list-container">
        <ul>
          <li>Diagnóstico Prenatal Avanzado</li>
          <li>Procedimientos Invasivos</li>
          <li>Doppler Fetal Básico y Avanzado</li>
          <li>Cirugía y Terapia Fetal</li>
          <li>Ecocardiografía Fetal</li>
          <li>Cursos de Formación</li>
        </ul>
      </div>
      <PrimaryLink text="Ver todos los procedimientos" toPage="/procedimientos" />
    </div>
  </section>
)

export default ProceduresBlock
