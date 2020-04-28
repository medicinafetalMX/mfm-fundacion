import { Link } from "gatsby"
import React, { Component } from "react"
import { TimelineLite } from "gsap"
import Carousel from "react-grid-carousel"

import cover from "../../images/home/baby.jpg"
import facebook from "../../images/facebook.svg"
import instagram from "../../images/instagram.svg"

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

    this.animation = new TimelineLite({ paused: true })
  }

  componentDidMount() {
    this.animation
      .from(this.textBox, 1, { x: 200, width: 0 }, 1)
      .from(this.imageBox, 0.75, { width: 0 }, 2)
      .from(this.title, 0.5, { autoAlpha: 0, opacity: 0, y: -8 }, 3)
      .from(this.header, 0.5, { autoAlpha: 0, opacity: 0, y: -8 }, 3.8)
      .from(this.cta, 0.7, { autoAlpha: 0, opacity: 0 }, 4.25)
      .from(this.socialMedia, 1, { opacity: 0, y: 20 }, 4.5)

    this.animation.play()
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
              <Carousel.Item>
                <img
                  src={cover}
                  alt="Bienvenido a Medicina Fetal México"
                  ref={div => (this.image = div)}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={cover}
                  alt="Bienvenido a Medicina Fetal México"
                  ref={div => (this.image = div)}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={cover}
                  alt="Bienvenido a Medicina Fetal México"
                  ref={div => (this.image = div)}
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div
            ref={div => (this.socialMedia = div)}
            className="social-media-container"
          >
            <a href="https://facebook.com">
              <img src={facebook} alt="Visítanos en Facebook" />
            </a>
            <a href="https://instagram.com">
              <img src={instagram} alt="Visítanos en Instagram" />
            </a>
          </div>
        </div>
        <div className="text-box" ref={div => (this.textBox = div)}>
          <p ref={p => (this.title = p)}>Fundación Medicina Fetal México</p>
          <h1 ref={h1 => (this.header = h1)}>
            Nuestra misión es preservar la salud
          </h1>
          <Link
            to="/conocenos"
            className="button button-cta"
            ref={a => (this.cta = a)}
          >
            Conoce más
          </Link>
        </div>
      </section>
    )
  }
}

export default Intro
