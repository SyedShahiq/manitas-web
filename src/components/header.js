import React, { Component } from 'react';
import './header.css';
import NavbarItem from './Navbar/NavbarItem';

class Header extends Component {
  render() {
    return (
      <header className="site-header">
        <nav className="navbar navbar-expand-lg navbar-light container">
          <a className="navbar-brand" href="#">
            <img className="col-sm-2" src={require('./logo.png')} alt="Logo" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <NavbarItem ref_link="services" content={this.props.content.header.services}/>
              <NavbarItem ref_link="why-us" content={this.props.content.header.why_us}/>
              <NavbarItem ref_link="blogs" content={this.props.content.header.blogs}/>
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