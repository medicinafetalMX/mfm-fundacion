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
    </>
  )
}


export default NewEvent