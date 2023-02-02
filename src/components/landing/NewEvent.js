import { Link, StaticQuery, graphql } from "gatsby"
import React, { Component, useState, useEffect } from "react"
import newEvent from "../../images/eventNew.jpg"

function NewEvent() {
  const now = new Date();
  const endDate = new Date('March 31, 2023 23:59:59');
  var duration = endDate.getTime() - now.getTime();
  var  difference = duration / (1000 * 3600 * 24);
  const [date, setDate] = useState(difference);
  const [hide, setHide] = useState("");
  
  useEffect(() => {   

    if(now < endDate){
      console.log(date | 0);
      setHide("");
    }
    else{
      setHide("none");
    }
  }, [difference, date])

  return (
    <>
      <section className="about">
        <div className="content-screen">
          <div className="row">
            <img src={newEvent} alt="" className="image-content" />
            <div className="column content-box">
              <br></br>
              <h1>¡DI SÍ AL REDONDEO EN TIENDAS OXXO!</h1>
              <p>
                De enero a marzo de 2023 cada redondeo que hagas en tiendas Oxxo de Zapopan ayudarás con la compra de materiales e insumos médicos necesarios en las cirugías fetales y terapias neonatales.
                Tu aportación ayuda a mamás y bebés en vida fetal.
              </p>
              <h3 style={{"color": "#f5b4c8", "display": hide}}>{date | 0} días restantes.</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export default NewEvent