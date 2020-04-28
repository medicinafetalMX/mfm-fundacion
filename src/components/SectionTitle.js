import React from "react"

const SectionTitle = props => {
  return (
    <div className="section-title">
      <h2>{props.title}</h2>
      <hr style={{ background: props.color }} />
    </div>
  )
}

export default SectionTitle
