import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="site-header">
        <nav className="navbar navbar-expand-md navbar-dark bg-steel fixed-top">
          <div className="container">
            <a className="navbar-brand mr-4" href="/">Manitas</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarToggle">
              <div className="navbar-nav ml-auto">
                <a className="nav-item nav-link">Home</a>
                <a className="nav-item nav-link">Posts</a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;