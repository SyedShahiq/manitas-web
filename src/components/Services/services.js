import React, { Component } from 'react';
import Service from './service';
import './services.css';

class Services extends Component {
  constructor(props) {
    super(props);
    this.services = [
      {
        colored: 'air-conditioning_colored-en.png',
        uncolored: 'air-conditioning-en.png',
        'en': 'Air Conditioning',
        'es': 'Aire acondicionado'
      },
      {
        colored: 'carpenter_colored-en.png',
        uncolored: 'carpenter-en.png',
        'en': 'Carpenter',
        'es': 'Carpintero'
      },
      {
        colored: 'cleaning_colored-en.png',
        uncolored: 'cleaning-en.png',
        en: 'Cleaning',
        es: 'Limpieza'
      },
      {
        colored: 'doors_colored-en.png',
        uncolored: 'doors-en.png',
        en: 'Doors, Windows',
        es: 'Puertas, Ventanas'
      },
      {
        colored: 'elec_dev_colored-en.png',
        uncolored: 'elec_dev-en.png',
        en: 'Electrical Devices',
        es: 'Aparatos eléctricos'
      },
      {
        colored: 'elect_colored-en.png',
        uncolored: 'elect-en.png',
        en: 'Electricity',
        es: 'Electricidad'
      },
      {
        colored: 'garden_colored-en.png',
        uncolored: 'garden-en.png',
        en: 'Garden & Outdoors',
        es: 'Jardín y aire libre'
      },
      {
        colored: 'handyman_colored-en.png',
        uncolored: 'handyman-en.png',
        en: 'Handyman',
        es: 'Personal de mantenimiento'
      },
      {
        colored: 'homeworks_colored-en.png',
        uncolored: 'homeworks-en.png',
        en: 'Home Works',
        es: 'Tareas escolares'
      },
      {
        colored: 'lock_colored-en.png',
        uncolored: 'lock-en.png',
        en: 'Locksmith',
        es: 'Cerrajero'
      },
      {
        colored: 'moving_service_colored-en.png',
        uncolored: 'moving_service-en.png',
        en: 'Moving Service',
        es: 'Servicio de mudanzas'
      },
      {
        colored: 'others_colored-en.png',
        uncolored: 'others-en.png',
        en: 'Others',
        es: 'Otras'
      },
      {
        colored: 'painting_colored-en.png',
        uncolored: 'painting-en.png',
        en: 'Painting',
        es: 'Pintura'
      },
      {
        colored: 'plumbing_colored-en.png',
        uncolored: 'plumbing-en.png',
        en: 'Plumbing',
        es: 'Plomería'
      },
      {
        colored: 'upholstery_colored-en.png',
        uncolored: 'upholstery-en.png',
        en: 'Upholstery',
        es: 'Tapicería'
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
