import React from "react"
import PrimaryHeader from "../primaryHeader"
import PrimaryLink from "../primaryLink"

import image from "../../images/surgeon2.png"

const HistoryBlock = () => (
  <section className="history">
    <div className="content-screen">
      <PrimaryHeader title="Nuestra trayectoria" />
      <div className="row">
        <div className="column content-box">
          <p>
            Realizamos <b>más de 100 cirugías fetales</b> en 24 meses, mejorando algunas técnicas quirúrgicas y realizamos 2 procedimientos nuevos en el mundo:
          </p>
          <ol>
            <li>Intubación traqueal fetal endoscópica</li>
            <li>Broncoscopía Fetal</li>
          </ol>
          <PrimaryLink toPage="/trayectoria" text="Ver Trayectoria Medicina Fetal México" />
        </div>
        <div className="image-content">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  </section>
)

export default HistoryBlock
