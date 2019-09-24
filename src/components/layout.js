/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet";
import { TweenMax } from "gsap";

import Header from "./header"
import "./layout.css"

class Layout extends Component {
  constructor(props) {
    super(props);

    this.app = null;
  }
  componentDidMount() {
    TweenMax.to(this.app, 0, {css: {visibility: 'visible'}});
  }

  render() {
    return (
      <div className="App" ref={div => this.app = div}>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        </Helmet>
        <Header />
        <div className="site-content">
          <main>{this.props.children}</main>
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
