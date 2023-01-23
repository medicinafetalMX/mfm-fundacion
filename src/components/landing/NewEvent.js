import { Link, StaticQuery, graphql } from "gatsby"
import React, { Component, useState} from "react"
import newEvent from "../../images/eventNew.jpeg"

class NewEvent extends Component {
    
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
                    <>
                        <section className="about">
                            <div className="content-screen">
                                <div className="row">
                                    <img src={newEvent} alt="" className="image-content" />
                                    <div className="column content-box">
                                        <h1 ref={h1 => (this.header = h1)} >¡DI SÍ AL REDONDEO EN TIENDAS OXXO!</h1>
                                        <p>
                                            De enero a marzo de 2023 cada redondeo que hagas en tiendas Oxxo de Zapopan ayudarás con la compra de materiales e insumos médicos necesarios en las cirugías fetales y terapias neonatales.
                                            Tu aportación ayuda a mamás y bebés en vida fetal
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        
                    </>
                )}
            />
        )
    }
}


export default NewEvent