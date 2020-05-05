import React from "react"
import { StaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


const SupportCard = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          apoya: allContentfulApoya {
            edges {
              node {
                correo
                descripcion {
                  json
                }
                telefono
                banco
                clabe
                cuenta
                nombreFundacion
              }
            }
          }
        }
      `}
      render={data => (
        <div className="support-card">
          <div>
            {documentToReactComponents(data.apoya.edges[0].node.descripcion.json)}
          </div>
          <div className="donations-card">
            <div className="circle-up" />
            <div className="circle-bot" />
            <p><b>Nombre de la fundación: </b>{data.apoya.edges[0].node.nombreFundacion}</p>
            <p><b>Banco: </b>{data.apoya.edges[0].node.banco}</p>
            <p><b>No. Cuenta: </b>{data.apoya.edges[0].node.cuenta}</p>
            <p><b>CLABE: </b>{data.apoya.edges[0].node.clabe}</p>
          </div>
          <p>
            ¡Contáctanos! Escribe un mail a <a className="secondary-link" href={`mailto:${data.apoya.edges[0].node.correo}?Subject=Nueva%20Pregunta`}>{data.apoya.edges[0].node.correo}</a> o llámanos al {data.apoya.edges[0].node.telefono}.
          </p>
        </div>
      )}
    />
  )
}

export default SupportCard;