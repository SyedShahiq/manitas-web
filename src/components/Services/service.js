import React, { Component } from 'react';
import './service.css';
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
        this.sub_categories = this.props.sub_categories.map((sub_category, key) =>
            <li key={key} className="list-group-item">{sub_category}</li>
        )
        return (
            <React.Fragment>
                <div data-toggle={this.props.test} className="service col-lg-2 col-md-2 col-sm-12 col-xs-12"
                    onMouseEnter={this.setColoredImage}
                    onMouseLeave={this.setColoredImage}
                >
                    <img className={this.state.is_colored ? 'd-none' : ''} height="200" width="200" alt="service" src={require('./images/' + this.props.image_src_uncolored)}></img>
                    <img className={!this.state.is_colored ? 'd-none' : ''} height="200" width="200" alt="service" src={require('./images/' + this.props.image_src_colored)}></img>
                    <h5 className="service-title">{this.props.heading}</h5>
                    <div id={"popover-content-"+this.props.test} style={{ 'display': 'none' }}>
                        <ul className="list-group custom-popover">
                            {this.sub_categories}
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Service;