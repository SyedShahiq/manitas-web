import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="site-header">
        <nav className="navbar navbar-expand-md navbar-dark bg-steel fixed-top">
          <div className="container">
            <a className="navbar-brand mr-4" href="/">Manitas</a>
            <div className="collapse navbar-collapse" id="navbarToggle">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown</a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/">Actiosn</a>
                    <a className="dropdown-item" href="/">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/">Something else here</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;