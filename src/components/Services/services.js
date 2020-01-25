import React, { Component } from 'react';
import './services.css';
import Service from './service';

class Services extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="services" className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h1>Services</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <Service image_src_uncolored="air-conditioning-en.png" image_src_colored="air-conditioning_colored-en.png" />
            <Service image_src_uncolored="carpenter-en.png" image_src_colored="carpenter_colored-en.png" />
            <Service image_src_uncolored="cleaning-en.png" image_src_colored="cleaning_colored-en.png" />
            <Service image_src_uncolored="doors-en.png" image_src_colored="doors_colored-en.png" />
            <Service image_src_uncolored="elec_dev-en.png" image_src_colored="elec_dev_colored-en.png" />
            <Service image_src_uncolored="elect-en.png" image_src_colored="elect_colored-en.png" />
            <Service image_src_uncolored="garden-en.png" image_src_colored="garden_colored-en.png" />
            <Service image_src_uncolored="handyman-en.png" image_src_colored="handyman_colored-en.png" />
            <Service image_src_uncolored="homeworks-en.png" image_src_colored="homeworks_colored-en.png" />
            <Service image_src_uncolored="lock-en.png" image_src_colored="lock_colored-en.png" />
            <Service image_src_uncolored="moving_service-en.png" image_src_colored="moving_service_colored-en.png" />
            <Service image_src_uncolored="others-en.png" image_src_colored="others_colored-en.png" />
            <Service image_src_uncolored="painting-en.png" image_src_colored="painting_colored-en.png" />
            <Service image_src_uncolored="plumbing-en.png" image_src_colored="plumbing_colored-en.png" />
            <Service image_src_uncolored="upholstery-en.png" image_src_colored="upholstery_colored-en.png" />
          </div>
        </div>
      </React.Fragment>
    )
  }

}

export default Services;
