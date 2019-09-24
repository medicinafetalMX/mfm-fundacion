import React, { Component } from "react";
import { TweenMax } from "gsap/all";

class MenuHamburger extends Component{
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false
    }

    this.topBar = null;
    this.botBar = null;

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu() {
    this.props.changeState();
    TweenMax.to(this.topBar, 0.3, { rotation: 45, y: 3 });
    TweenMax.to(this.botBar, 0.3, { rotation: -45, y: -4 });
  }

  closeMenu() {
    this.props.changeState();
    TweenMax.to(this.topBar, 0.3, { rotation: 0, y: 0 });
    TweenMax.to(this.botBar, 0.3, { rotation: 0, y: 0 });
  }

  render() {
    return (
      <div 
        className="menu-control" 
        onClick={this.props.isMenuOpen ? this.closeMenu : this.openMenu}
      >
        <div className="menu-label menu-link">{this.props.isMenuOpen ? 'Cerrar' : 'Menú'}</div>
        <div className="burger">
          <div className="line top-line" ref={div => this.topBar = div} />
          <div className="line bot-line" ref={div => this.botBar = div} />
        </div>
      </div>
    )
  }
}

export default MenuHamburger;