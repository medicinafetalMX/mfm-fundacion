import React from "react"

const SocialLink = props => {
  return (
    <div
      className="social-link icon white"
      style={{
        columns: !props.onlyIcon && "2",
      }}
    >
      <a href={props.url} alt={props.title}>
        {props.children}
        {!props.onlyIcon && props.title}
      </a>
    </div>
  )
}

export default SocialLink
