import React from "react"
import { Link } from "gatsby"
import rightArrow from "../images/rightArrow.svg"

const StoryCard = (props) => (
  <div className="story-card">
    <div className="cover">
      <img src={props.image} alt={props.altText}/>
    </div>
    <div className="content">
      <h4>{props.name}</h4>
      <div className="location">{props.location}</div>
      <p>
        {`"${props.excerpt}"`}
      </p>
      <Link to="/testimonios" className="primary-link">Lee más</Link>
    </div>
  </div>
)

export default StoryCard
