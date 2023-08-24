import React from "react"
import { StaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";



const SupportCard = ({amount}) => {
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
          { !amount && documentToReactComponents(data.apoya.edges[0].node.descripcion.json)}
          </div>
          <div className="donations-card">
            <div className="circle-up" />
            <div className="circle-bot" />
            <p><b>Nombre de la fundación: </b>{data.apoya.edges[0].node.nombreFundacion}</p>
            <p><b>Banco: </b>{data.apoya.edges[0].node.banco}</p>
            <p><b>No. Cuenta: </b>1219889884</p>
            <p><b>CLABE: </b>072 320 012198898846</p>
            { amount && <p><b>Monto: </b>{amount}</p>}
          </div>
          <p>
            { amount 
              ? <>Manda tu comprobante y dirección de envío a <a className="secondary-link" href={`mailto:donacionesfundacion@medicinafetalmexico.com?Subject=Nueva%20Pregunta`}>donacionesfundacion@medicinafetalmexico.com</a> o llámanos al 442 168 7879.</> 
              : <>¡Contáctanos! Escribe un mail a <a className="secondary-link" href={`mailto:donacionesfundacion@medicinafetalmexico.com?Subject=Nueva%20Pregunta`}>donacionesfundacion@medicinafetalmexico.com</a> o llámanos al 4421687879.</>}
          </p>
        </div>
      )}
    />
  )
}

export default SupportCard;