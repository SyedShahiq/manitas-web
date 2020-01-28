import React, { Component } from 'react';
import './services.css';
import Service from './service';

class Services extends Component {
  constructor(props) {
    super(props);
    this.services = [
      {
        colored: 'air-conditioning_colored-en.png',
        uncolored: 'air-conditioning-en.png',
        'en': 'Air Conditioning',
        'es': 'Es Air Conditioning'
      },
      {
        colored: 'carpenter_colored-en.png',
        uncolored: 'carpenter-en.png',
        'en': 'Air Conditioning',
        'es': 'Es Air Conditioning'
      },
      {
        colored: 'cleaning_colored-en.png',
        uncolored: 'cleaning-en.png',
        en: 'Air Conditioning',
        es: 'Es Air Conditioning'
      },
      {
        colored: 'doors_colored-en.png',
        uncolored: 'doors-en.png',
        en: 'Air Conditioning',
        es: 'Es Air Conditioning'
      },
      {
        colored: 'elec_dev_colored-en.png',
        uncolored: 'elec_dev-en.png',
        en: 'Air Conditioning',
        es: 'Es Air Conditioning'
      },
      {
        colored: 'elect_colored-en.png',
        uncolored: 'elect-en.png',
        en: 'Air Conditioning',
        es: 'Es Air Conditioning'
      },
      {
        colored: 'garden_colored-en.png',
        uncolored: 'garden-en.png',
        en: 'Air Conditioning',
        es: 'Es Air Conditioning'
      },
      {
        colored: 'handyman_colored-en.png',
        uncolored: 'handyman-en.png',
        en: 'Air Conditioning',
        es: 'Es Air Conditioning'
      },
      {
        colored: 'homeworks_colored-en.png',
        uncolored: 'homeworks-en.png',
        en: 'Air Conditioning',
        es: 'Es Air Conditioning'
      },
      {
        colored: 'lock_colored-en.png',
        uncolored: 'lock-en.png',
        en: 'Air Conditioning',
        es: 'Es Air Conditioning'
      },
      {
        colored: 'moving_service_colored-en.png',
        uncolored: 'moving_service-en.png',
        en: 'Air Conditioning',
        es: 'Es Air Conditioning'
      },
      {
        colored: 'others_colored-en.png',
        uncolored: 'others-en.png',
        en: 'Air Conditioning',
        es: 'Es Air Conditioning'
      },
      {
        colored: 'painting_colored-en.png',
        uncolored: 'painting-en.png',
        en: 'Air Conditioning',
        es: 'Es Air Conditioning'
      },
      {
        colored: 'plumbing_colored-en.png',
        uncolored: 'plumbing-en.png',
        en: 'Air Conditioning',
        es: 'Es Air Conditioning'
      },
      {
        colored: 'upholstery_colored-en.png',
        uncolored: 'upholstery-en.png',
        en: 'Air Conditioning',
        es: 'Es Air Conditioning'
      },
    ]
  }
  render() {
    this.provided_services = this.services.map((service, key) =>
      <Service key={key} heading={service[this.props.language]} image_src_uncolored={service.uncolored} image_src_colored={service.colored} />
    );
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
