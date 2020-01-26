import React, { Component } from 'react';
import './services.css';
import Service from './service';

class Services extends Component {
  constructor(props) {
    super(props);
    this.services = [
      {
        colored: 'air-conditioning_colored-en.png',
        uncolored: 'air-conditioning-en.png'
      },
      {
        colored: 'carpenter_colored-en.png',
        uncolored: 'carpenter-en.png'
      },
      {
        colored: 'cleaning_colored-en.png',
        uncolored: 'cleaning-en.png'
      },
      {
        colored: 'doors_colored-en.png',
        uncolored: 'doors-en.png'
      },
      {
        colored: 'elec_dev_colored-en.png',
        uncolored: 'elec_dev-en.png'
      },
      {
        colored: 'elect_colored-en.png',
        uncolored: 'elect-en.png'
      },
      {
        colored: 'garden_colored-en.png',
        uncolored: 'garden-en.png'
      },
      {
        colored: 'handyman_colored-en.png',
        uncolored: 'handyman-en.png'
      },
      {
        colored: 'homeworks_colored-en.png',
        uncolored: 'homeworks-en.png'
      },
      {
        colored: 'lock_colored-en.png',
        uncolored: 'lock-en.png'
      },
      {
        colored: 'moving_service_colored-en.png',
        uncolored: 'moving_service-en.png'
      },
      {
        colored: 'others_colored-en.png',
        uncolored: 'others-en.png'
      },
      {
        colored: 'painting_colored-en.png',
        uncolored: 'painting-en.png'
      },
      {
        colored: 'plumbing_colored-en.png',
        uncolored: 'plumbing-en.png'
      },
      {
        colored: 'upholstery_colored-en.png',
        uncolored: 'upholstery-en.png'
      },
    ]
    this.provided_services = this.services.map((service, key) =>
    <Service image_src_uncolored={service.uncolored} image_src_colored={service.colored} />
    );
  }
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
            {this.provided_services}
          </div>
        </div>
      </React.Fragment>
    )
  }

}

export default Services;
