import React, { Component } from 'react';
import './service.css'
class Service extends Component {
    state = {
        image_src: this.props.image_src_uncolored
    }
    setColoredImage = () => {
        this.setState({
            image_src: this.props.image_src_colored
        })
    }
    unsetColoredImage = () => {
        this.setState({
            image_src: this.props.image_src_uncolored
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="service col-lg-2 col-md-2 col-sm-12 col-xs-12"
                    onMouseEnter={this.setColoredImage}
                    onMouseLeave={this.unsetColoredImage}
                >
                    <img height="200" width="200" alt="service" src={require('./images/' + this.state.image_src)}></img>
                </div>
            </React.Fragment>
        )
    }
}
export default Service;