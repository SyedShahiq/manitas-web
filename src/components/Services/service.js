import React, { Component } from 'react';
import './service.css'
class Service extends Component {
    state = {
        is_colored: false
    }
    setColoredImage = () => {
        this.setState({
            is_colored: !this.state.is_colored
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="service col-lg-2 col-md-2 col-sm-12 col-xs-12"
                    onMouseEnter={this.setColoredImage}
                    onMouseLeave={this.setColoredImage}
                >
                    <img className={this.state.is_colored ? 'd-none' : ''} height="200" width="200" alt="service" src={require('./images/' + this.props.image_src_uncolored)}></img>
                    <img className={!this.state.is_colored ? 'd-none' : ''} height="200" width="200" alt="service" src={require('./images/' + this.props.image_src_colored)}></img>
                    <p>{this.props.heading}</p>
                </div>
            </React.Fragment>
        )
    }
}
export default Service;