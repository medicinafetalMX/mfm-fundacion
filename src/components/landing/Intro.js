import { Link, StaticQuery, graphql } from "gatsby"
import React, { Component } from "react"
import { TimelineLite } from "gsap"
import Carousel from "react-grid-carousel"
import book from "../../images/home/libro.jpg"
import facebook from "../../images/facebook.svg"
import instagram from "../../images/instagram.svg"
import twitter from "../../images/twitter.svg"
import { PayPalButtons } from "@paypal/react-paypal-js"
import { navigate } from "gatsby"
class Intro extends Component {
  constructor(props) {
    super(props)

    this.imageBox = null
    this.image = null
    this.textBox = null
    this.title = null
    this.header = null
    this.cta = null
    this.socialMedia = null

    //this.animation = new TimelineLite({ paused: true })
  }

  componentDidMount() {
    // this.animation
    //   .from(this.textBox, 1, { x: 200, width: 0 }, 1)
    //   .from(this.imageBox, 0.75, { width: 0 }, 2)
    //   .from(this.title, 0.5, { autoAlpha: 0, opacity: 0, y: -8 }, 3)
    //   .from(this.header, 0.5, { autoAlpha: 0, opacity: 0, y: -8 }, 3.8)
    //   .from(this.cta, 0.7, { autoAlpha: 0, opacity: 0 }, 4.25)
    //   .from(this.socialMedia, 1, { opacity: 0, y: 20 }, 4.5)
    //this.animation.play()
  }

  render() {
    const Span = () => (
      <span
        style={{
          display: "none",
        }}
      ></span>
    )
    return (
      <StaticQuery
        query={graphql`
          {
            Redes: allContentfulRedesSociales {
              edges {
                node {
                  facebook
                  instagram
                }
              }
            }
            Images: allContentfulIntro {
              edges {
                node {
                  descripcion
                  imagenes {
                    file {
                      url
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <section className="intro">
            <div className="blank-box">
              <div className="cover" ref={div => (this.imageBox = div)}>
                <Carousel
                  cols={1}
                  rows={1}
                  autoplay={3000}
                  arrowLeft={Span}
                  arrowRight={Span}
                  loop
                  style={{ margin: "0px" }}
                >
                  {
                    /*
                  {data.Images.edges[0].node.imagenes.map(({ file }, index) => (
                    <Carousel.Item>
                      <img
                        src={file.url}
                        alt="Bienvenido a Medicina Fetal México"
                        ref={div => (this.image = div)}
                      />
                    </Carousel.Item>
                  ))}
                    */
                  }
                </Carousel>

                <img src={book} alt=""/>
              </div>
              <div
                ref={div => (this.socialMedia = div)}
                className="social-media-container"
              >
                {data.Redes.edges.map(({ node }, index) => (
                  <>
                    <a href={node.facebook} target="_blank">
                      <img src={facebook} alt="Visítanos en Facebook" />
                    </a>
                    <a href={node.instagram} target="_blank">
                      <img src={instagram} alt="Visítanos en Instagram" />
                    </a>
                  </>
                ))}
              </div>
            </div>
            <div className="text-box" ref={div => (this.textBox = div)} >
              <h1 ref={h1 => (this.header = h1)} >ECOGRAFÍA FETAL LIBRO</h1>
              <div style={{ "wordBreak": "keep-all", "textAlign": "justify", "maxWidth": "600px" }}>
                <p ref={p => (this.title = p)} style={{ "display": "flex" }}>Los avances tecnológicos han permitido una favorable evolución de los alcances
                  clínicos de la Ecografía Fetal como disciplina médica. Con la mejoría en la
                  resolución de la imagen ecográfica, se ha incrementado también la capacidad de
                  evaluar nuevas estructuras intrafetales y lograr comprender mejor la anatomía y
                  desarrollo fetal. Aunque existen otros textos relacionados con la Ecografía Fetal
                </p>
              </div>
              <div style={{ "wordBreak": "keep-all", "textAlign": "justify", "maxWidth": "600px" }}>
                <p ref={p => (this.title = p)} >Son escasos los que incluyen imágenes de alta resolución de las diferentes
                  estructuras anatómicas del feto. Esta obra ha sido realizada por especialistas en
                  Medicina Materno Fetal que colaboran con la Fundación Medicina Fetal México e
                  incluye una gran variedad de imágenes ecográficas obstétricas de máxima
                  resolución y calidad, así como guías técnicas concisas para lograr una adecuada
                  adquisición e interpretación de los diferentes planos ecográficos recomendados
                  durante la evaluación ultrasonográfica del feto.
                </p>
              </div>
              <div style={{ "wordBreak": "keep-all", "textAlign": "justify", "maxWidth": "600px" }}>
                <p ref={p => (this.title = p)}>La obra ha sido especialmente diseñada para acortar la curva de aprendizaje a
                  todos los médicos de diferentes disciplinas relacionadas con el Ultrasonido
                  Obstétrico y tiene el objetivo de convertirse en la guía principal para reconocer la
                  normalidad de la Ecografía Fetal a diferentes edades gestacionales
                </p>
              </div>

              <Link
                to="/libro"
                className="button button-cta"
                ref={a => (this.cta = a)}
                
              >¡Comprar ahora!</Link>

              {/*
              <PayPalButtons style={{'color': 'blue'}} 
                className="button button-cta"
                createOrder={(data, actions) => {
                  return actions.order.create({
                    'purchase_units': [{
                      'amount': {
                        value: "0.01"
                      }
                    }],
                    "application_context": {"brand_name": "Fundación Medicina Fetal México"}
                  })
                }}
                onApprove = {(data, actions) =>{
                  navigate("/successPayment")
                }}
              >
              </PayPalButtons>
              */}


              {
                /*
              <p ref={p => (this.title = p)}>Fundación Medicina Fetal México</p>
              <h1 ref={h1 => (this.header = h1)}>
                {data.Images.edges.map(({ node }, index) => (
                  <>{node.descripcion}</>
                ))}
              </h1>
              <Link
                to="/conocenos"
                className="button button-cta"
                ref={a => (this.cta = a)}
              >
                Conoce más
              </Link>
                */
              }
            </div>
          </section>
        )}
      />
    )
  }
}

export default Intro
