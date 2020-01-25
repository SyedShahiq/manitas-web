import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header className="site-header">
        <nav className="navbar navbar-expand-lg navbar-light container">
          <a className="navbar-brand" href="#">
            <img className="col-sm-2" src={require('./logo.png')} alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Why Us</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {this.props.language}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div onClick={() => this.props.languageChanger("en")} className="dropdown-item">English</div>
                  <div onClick={() => this.props.languageChanger("es")} className="dropdown-item">Español</div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;