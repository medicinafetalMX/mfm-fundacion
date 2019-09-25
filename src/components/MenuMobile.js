import React, { Component } from "react";
import { Link } from "gatsby";
import { TimelineLite, Power3, TweenLite } from "gsap";

class MenuMobile extends Component {
  constructor(props) {
    super(props);

    this.bgOne = null;
    this.bgTwo = null;
    this.links = [];

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);

    this.animation = new TimelineLite({ paused: true });
  }

  componentDidMount() {
    this.animation
      .from(this.bgOne, 0.6, { height: 0, ease: Power3.easeOut })
      .from(this.bgTwo, 0.6, { height: 0, delay: -0.5 })
      .staggerFrom(this.links, 0.3, { autoAlpha: 0, opacity: 0, y: -40 }, 0.07);
  }

  componentDidUpdate(prevProps) {
    if (this.props.isMenuOpen !== prevProps.isMenuOpen) {
      this.props.isMenuOpen ? this.openMenu() : this.closeMenu();
    }
  }

  openMenu() {
    console.log('Opening');
    
    this.animation.play();
  }

  closeMenu() {
    console.log('Closing');
    this.animation.reverse();
  }

  render() {
    return (
      <div className="mobile-menu" ref={div => this.bgOne = div}>
        <div className="white-box" ref={div => this.bgTwo = div}>
          <Link to="/" ref={a => this.links.push(a)}>Inicio</Link>
          <Link to="/conocenos" ref={a => this.links.push(a)}>Conócenos</Link>
          <Link to="/educacion" ref={a => this.links.push(a)}>Educación</Link>
          <Link to="/investigacion" ref={a => this.links.push(a)}>Investigación</Link>
          <Link to="/laborsocial" ref={a => this.links.push(a)}>Labor Social</Link>
          <Link to="/neurodesarrollo" ref={a => this.links.push(a)}>Neurodesarrollo</Link>
          <Link to="/miembarazo" ref={a => this.links.push(a)}>Mi Embarazo</Link>
          <Link to="/eventos" ref={a => this.links.push(a)}>Eventos</Link>
          <Link to="/foro" ref={a => this.links.push(a)}>Foro</Link>
          <Link to="/apoya" ref={a => this.links.push(a)}>Cómo Apoyar</Link>
        </div>
      </div>
    )
  }
}

export default MenuMobile;