import React from "react"
import { Link } from "gatsby"
import rightArrow from "../images/rightArrow.svg"

const PrimaryLink = (props) => (
  <Link to={props.toPage} className="primary-link">
    <div>{props.text}</div>
    <img src={rightArrow} alt=""/>
  </Link>
)

export default PrimaryLink
