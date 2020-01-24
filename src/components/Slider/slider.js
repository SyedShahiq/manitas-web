import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './slider.css';
class Slider extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <div className="first slides"></div>
                    <Carousel.Caption>
                        <h1>{this.props.content.slider.first.heading_1}</h1>
                        <h3>{this.props.content.slider.first.heading_2}</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <div className="download">
                          <a href="/" className="apple"><i className="fa fa-apple"></i>App Store</a>
                          <a href="/" className="google-playstore"><i className="fa fa-android"></i>Google Play</a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="second slides"></div>
                    <Carousel.Caption>
                        <h1>{this.props.content.slider.first.heading_1}</h1>
                        <h3>{this.props.content.slider.first.heading_2}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className="download">
                        <a href="/" className="apple"><i className="fa fa-apple"></i>App Store</a>
                        <a href="/" className="google-playstore"><i className="fa fa-android"></i>Google Play</a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default Slider;