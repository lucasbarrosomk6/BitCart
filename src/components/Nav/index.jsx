import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import "./nav.css";

class Nav extends Component {
  state = {
    navOptions: this.props.navOptions,
    path: this.props.history.location.pathname,
  };
  handleSelect = (options) => {
    const array = [...options];
    console.log(this.props.history.location.pathname);
    array.forEach((item) =>
      item.path === this.props.history.location.pathname
        ? (item.selected = true)
        : (item.selected = false)
    );
    this.setState({ navOptions: array });
  };
  componentDidMount() {
    this.handleSelect(this.state.navOptions);
  }
  render() {
    const { navOptions } = this.state;
    return (
      <div className="nav-bar">
        <div style={{ width: "100%" }}>
          <div className="user-info-container">
            <div className="user-portrait"></div>
          </div>
          <div className="nav-options">
            {navOptions.map((option) => (
              <NavLink
                key={option.name}
                to={option.path}
                className="nav-option"
                activeClassName="selected"
              >
                <div style={{ textAlign: "left", width: "50%" }}>
                  {option.name}
                </div>
              </NavLink>
            ))}
          </div>
        </div>

        <div className="bitcart-logo">Bitcart.</div>
      </div>
    );
  }
}

export default withRouter(Nav);
