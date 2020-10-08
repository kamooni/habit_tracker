import React, { PureComponent } from "react";

class Navbar extends PureComponent {
  render() {
    return (
      <header>
        <span className="logo">
          <i className="fas fa-leaf"></i>
        </span>
        <span className="header__title">Habit Tracker</span>
        <span className="header__count">{this.props.totalcount}</span>
      </header>
    );
  }
}

export default Navbar;
