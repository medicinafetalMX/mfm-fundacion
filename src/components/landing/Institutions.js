import React from "react"
import ImageLink from "../imageLink";
import { graphql } from "gatsby"
import seseg from "../../images/ssalud.png"
import imss from "../../images/imss.png"
import fgomez from "../../images/fgomez.png"
import gobcdmx from "../../images/gobcdmx.png"
import clinicbarcelona from "../../images/clinicbarcelona.png"

const Institutions = (props) => {

  return (
    <ImageLink
      image={props.image}
      ltText={props.ltText}
    />
  )
}
export default Institutions

