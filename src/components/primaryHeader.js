import React from "react"

const Header = (props) => (
  <h2 className="main-header">
    <hr/>
    <div>
      {props.title}
    </div>
  </h2>
)

export default Header
