import React from "react"
import SectionTitle from "../components/SectionTitle"
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/mfmflogo.png"

const avisoprivacidad = () => {
  return (
    <Layout>
      <SEO title="aviso de privacidad simplificado"></SEO>
      <div
        style={{
          width: "80%",
          margin: "0 auto",
        }}
      >
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={logo} alt="" style={{ width: "40%", margin: "0 auto" }} />
          </div>
          <br />
          <SectionTitle title="Aviso de privacidad simplificado"></SectionTitle>
          <div>
            <SectionTitle title="¿QUIÉNES SOMOS?"></SectionTitle>
            <p style={{ textJustify: "inter-word" }}>
              “FUNDACIÓN MEDICINA FETAL MÉXICO” A.C., es una Asociación Civil
              constituida conforme a las Leyes de los Estados Unidos Mexicanos,
              en lo sucesivo denominada como la “ORGANIZACIÓN”, se encuentra
              ubicada en Blvd. Bernardo Quintana Núm. 4060, Int. 508, Col. San
              Pablo, 76125, Querétaro, Querétaro, México, con número de
              teléfono: 442 195 7014 y correo electrónico:
              fundacion@medicinafetalmexico.com; es el responsable del uso y
              protección de sus datos personales, y al respecto le informamos lo
              siguiente:
            </p>
          </div>
          <SectionTitle title="¿PARA QUÉ FINES UTILIZAREMOS SUS DATOS PERSONALES?"></SectionTitle>
        </div>
        <div>
          <p>
            <strong>
              Los datos personales que la “ORGANIZACIÓN” obtiene, almacena y
              usa, le son proporcionados de manera voluntaria por usted para las
              siguientes finalidades:
            </strong>
          </p>
          <p>
            <ul>
              <li>Confirmar su identidad</li>
              <li>
                Darlo de alta en nuestros sistemas como participantes o
                prospecto de participante
              </li>
              <li>
                Contactarlo y hacerle llegar información de nuestros programas
                académicos y del boletín mensual vía digita
              </li>
              <li>
                Proporcionarle el curso online que solicite o contrate con
                nosotros y realizar examen en línea
              </li>
              <li>
                Efectuar el cobro correspondiente y generar el comprobante
                fiscal
              </li>
              <li>Otorgarle beneficios</li>
              <li>
                Dar cumplimiento a las obligaciones contraídas con usted y
                ejercer nuestros derechos
              </li>
            </ul>
            <i>
              Adicionalmente, su información personal podrá ser utilizada con
              las siguientes finalidades secundarias, las cuales no son
              necesarias para brindarle nuestros servicios, pero pueden resultar
              en su interés, y contribuyen a desarrollar nuestros legítimos
              intereses altruistas y/o académicos:
            </i>
            <ul>
              <li>Evaluar la calidad del servicio que le brindamos</li>
              <li>Invitarlo a congresos y programas académicos</li>
              <li>
                Realizar actividades publicitarias, promocionales y
                mercadotécnicas
              </li>
            </ul>
            <p>
              Si usted no desea que sus datos personales sean tratados para las
              finalidades secundarias señaladas, o alguna de ellas, puede
              negarnos su consentimiento desde este momento enviando su
              solicitud a nuestro oficial de privacidad. Su negativa no será
              motivo para dejar de proporcionarle nuestros servicios y realizar
              las demás finalidades.
            </p>
          </p>
          <SectionTitle title="¿DÓNDE PUEDO CONSULTAR EL AVISO DE PRIVACIDAD INTEGRAL?"></SectionTitle>
          <div>
            <p>
              Para conocer mayor información sobre los términos y condiciones en
              que serán tratados sus datos personales, como los terceros con
              quienes compartimos su información personal y la forma en que
              podrá ejercer sus derechos ARCO, puede consultar el aviso de
              privacidad integral en:{" "}
              <a href="/privacidadintegral">
                fundacionmfm.com/privacidadintegral
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default avisoprivacidad
