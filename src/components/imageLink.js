import React from "react"

const ImageLink = (props) => (
  <div className="image-link">
    <img src={props.image} alt={props.ltText} />
    <h4>{props.ltText}</h4>
  </div>
)
export default ImageLink
