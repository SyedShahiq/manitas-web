import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Slider extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('./images/images.jpeg')}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>{this.props.content.slider.first.heading_1}</h2>
                        <h3>{this.props.content.slider.first.heading_2}</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('./images/images.jpeg')}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2>{this.props.content.slider.first.heading_1}</h2>
                        <h3>{this.props.content.slider.first.heading_2}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default Slider;