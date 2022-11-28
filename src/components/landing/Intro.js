import { Link, StaticQuery, graphql } from "gatsby"
import React, { Component } from "react"
import { TimelineLite } from "gsap"
import Carousel from "react-grid-carousel"

import cover from "../../images/home/baby.jpg"
import facebook from "../../images/facebook.svg"
import instagram from "../../images/instagram.svg"
import twitter from "../../images/twitter.svg"
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

                <img src="/img/libro.jpg" style={{ "maxWidth": "500px", "maxHeight": "700px" }} />
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
            <div className="text-box" ref={div => (this.textBox = div)}>
              <h1 ref={h1 => (this.header = h1)}>Adquiere el nuevo libro de ecografía fetal.</h1>
              <p ref={p => (this.title = p)}>Autor: Dr. Rogelio Cruz Martínez</p>
              {
                /*
                          <Link
                              to="/conocenos"
                              className="button button-cta"
                              ref={a => (this.cta = a)}
                            >
                              ¡Adquirir ahora!
                            </Link>
                */
              }

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
