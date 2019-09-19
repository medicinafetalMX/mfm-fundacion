import React from "react"
import PrimaryHeader from "../primaryHeader"
import ImageLink from "../imageLink";

import seseg from "../../images/ssalud.png"
import imss from "../../images/imss.png"
import fgomez from "../../images/fgomez.png"
import gobcdmx from "../../images/gobcdmx.png"
import clinicbarcelona from "../../images/clinicbarcelona.png"

const Institutions = () => (
  <section className="institutions">
    <div className="content-screen">
      <PrimaryHeader title="Contamos con el respaldo de diversas instituciones" />
      <div className="images-container">
        <ImageLink 
          url="http://www.seseq.gob.mx/" 
          image={seseg} 
          ltText="Secretaría de Salud del Estado de Querétaro"
        />
        <ImageLink
          url="http://www.imss.gob.mx/"
          image={imss}
          ltText="Instituto Mexicano del Seguro Social"
        />
        <ImageLink
          url="http://himfg.com.mx/"
          image={fgomez}
          ltText="Hospital Infantil de México Federico Gómez"
        />
        <ImageLink
          url="https://www.cdmx.gob.mx/"
          image={gobcdmx}
          ltText="Gobierno de la Ciudad de México"
        />
        <ImageLink
          url="https://www.clinicbarcelona.org/"
          image={clinicbarcelona}
          ltText="Clínic Barcelona"
        />
      </div>
    </div>
  </section>
)

export default Institutions
