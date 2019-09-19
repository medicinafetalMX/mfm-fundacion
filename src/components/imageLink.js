import React from "react"

const ImageLink = (props) => (
  <a href={props.url} className="image-link">
    <img src={props.image} alt={props.altText}/>
  </a>
)

export default ImageLink
