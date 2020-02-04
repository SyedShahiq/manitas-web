import React, { Component } from 'react';
import NavbarItem from '../Navbar/NavbarItem';
import './Footer.css';
class Footer extends Component {
    render() {
        return (
            <section id="footer">
                <div className="container">
                    <div className="row text-center text-xs-center text-sm-left text-md-left">
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <h5>Quick links</h5>
                            <ul className="list-unstyled quick-links">
                                <NavbarItem ref_link="services" content={this.props.content.header.services}><i className="fa fa-angle-double-right"></i></NavbarItem>
                                <NavbarItem ref_link="why-us" content={this.props.content.header.why_us}><i className="fa fa-angle-double-right"></i></NavbarItem>
                                <NavbarItem ref_link="blogs" content={this.props.content.header.blogs}><i className="fa fa-angle-double-right"></i></NavbarItem>
                                <NavbarItem ref_link="about-us" content={this.props.content.header.about_us}><i className="fa fa-angle-double-right"></i></NavbarItem>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <h5>Contact</h5>
                            <div className="email"><i className="fa fa-envelope"></i>info@manitasweb.com</div>
                            <div className="phone-number"><i className="fa fa-phone"></i>01234567890</div>
                            <div className="address"><i className="fa fa-map-marker"></i>Adress will come here</div>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <h5>Social Links</h5>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                    <ul className="list-unstyled list-inline social">
                                        <li className="list-inline-item"><a href="https://www.facebook.com"><i className="fa fa-facebook"></i></a></li>
                                        <li className="list-inline-item"><a href="https://www.twitter.com"><i className="fa fa-twitter"></i></a></li>
                                        <li className="list-inline-item"><a href="https://www.instagram.com"><i className="fa fa-instagram"></i></a></li>
                                        <li className="list-inline-item"><a href="https://www.google.com"><i className="fa fa-google-plus"></i></a></li>
                                    </ul>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                            <p>Copyright © {(new Date().getFullYear())} Manitas. All rights reserved.</p>
                        </div>
                        <hr />
                    </div>
                </div>
            </section>
        )
    }
}

export default Footer;