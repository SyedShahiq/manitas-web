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
        en: 'Air Conditioning',
        es: 'Aire acondicionado',
        sub_categories_en: ['AC Installation', 'AC Maintenance/Repair', 'Heating Installation', 'Heating Maintenance/Repair']
      },
      {
        colored: 'carpenter_colored-en.png',
        uncolored: 'carpenter-en.png',
        en: 'Carpenter',
        es: 'Carpintero',
        sub_categories_en: ['Wood Carpentry', 'Aluminium Carpentry', 'Other Metal Carpentry', 'PVC Carpentry', 'Old Furniture Restoration', 'Furniture Repairs']
      },
      {
        colored: 'cleaning_colored-en.png',
        uncolored: 'cleaning-en.png',
        en: 'Cleaning',
        es: 'Limpieza',
        sub_categories_en: ['Home', 'Office', 'Industrial', 'Hotel/Rental']
      },
      {
        colored: 'doors_colored-en.png',
        uncolored: 'doors-en.png',
        en: 'Doors, Windows',
        es: 'Puertas, Ventanas',
        sub_categories_en: ['Wooden Doors and Windows', 'Aluminium Doors and Windows', 'Plastic Doors and Windows', 'Glazier', 'Blinds & Shades Installation/Repair']
      },
      {
        colored: 'elec_dev_colored-en.png',
        uncolored: 'elec_dev-en.png',
        en: 'Electrical Devices',
        es: 'Aparatos eléctricos',
        sub_categories_en: ['Fridge Repair',
          'Washing Machine Repair',
          'Oven Repair',
          'Dishwasher Repair',
          'Other Large Appliances Repair',
          'Small Appliances (iron, toaster, microwave) Repair',
          'Small Electronics Repair',
          'Antennas Installation/Repair',
          'Other Electrical Devices Repair']
      },
      {
        colored: 'elect_colored-en.png',
        uncolored: 'elect-en.png',
        en: 'Electricity',
        es: 'Electricidad',
        sub_categories_en: ['Install Outlets/Light Fixtures',
          'General Electricity Issues',
          'Restore Electricity',
          'Install Conventional or LED Lighting',
          'Install/Repair Central Electrical Panel',
          'Other Electrical Installations']
      },
      {
        colored: 'garden_colored-en.png',
        uncolored: 'garden-en.png',
        en: 'Garden & Outdoors',
        es: 'Jardín y aire libre',
        sub_categories_en: ['Mowing the Lawn',
          'Gardening',
          'Landscape Design',
          'Building/Repairing a Terrace']
      },
      {
        colored: 'handyman_colored-en.png',
        uncolored: 'handyman-en.png',
        en: 'Handyman',
        es: 'Personal de mantenimiento',
        sub_categories_en: ['Furniture Assembly',
          'Small Repairs',
          'Hanging Shelf/TV']
      },
      {
        colored: 'homeworks_colored-en.png',
        uncolored: 'homeworks-en.png',
        en: 'Home Works',
        es: 'Tareas escolares',
        sub_categories_en: ['Complete Repair',
          'Kitchen',
          'Bathroom',
          'Terrace/Outside',
          'Roof Works',
          'Floor Works',
          'Surface Works',
          'Tiles',
          'Build/Remove Walls',
          'Apartment Buildings Repairs']
      },
      {
        colored: 'lock_colored-en.png',
        uncolored: 'lock-en.png',
        en: 'Locksmith',
        es: 'Cerrajero',
        sub_categories_en: ['Lock Installation',
          'Lock Repair',
          'Open a Locked Door (Urgent)']
      },
      {
        colored: 'moving_service_colored-en.png',
        uncolored: 'moving_service-en.png',
        en: 'Moving Service',
        es: 'Servicio de mudanzas',
        sub_categories_en: ['Small Vans',
          'Big Vans/Trucks',
          'Platforms Elevation',
          'Full Moving (with deinstallation/reinstallation)',
          'Storage Services']
      },
      {
        colored: 'others_colored-en.png',
        uncolored: 'others-en.png',
        en: 'Others',
        es: 'Otras',
        sub_categories_en: ['Musical Instrument Setup and Repair',
          'PC Repairs',
          'Internet and Networking',
          'Smart Home System Installation',
          'Windows Installation',
          'РС Virus Repair',
          'Catering',
          'Delivery Services',
          'Delivery Services (Urgent)',
          'Others']
      },
      {
        colored: 'painting_colored-en.png',
        uncolored: 'painting-en.png',
        en: 'Painting',
        es: 'Pintura',
        sub_categories_en: ['Painting Inside (home or office)',
          'Painting Outside (home or office)',
          'Apply/Remove Texture Painting',
          'Apply/Remove Wallpapers',
          'Bathtub Reglazing']
      },
      {
        colored: 'plumbing_colored-en.png',
        uncolored: 'plumbing-en.png',
        en: 'Plumbing',
        es: 'Plomería',
        sub_categories_en: ['Install/Repair Plumbing',
          'WC Installation/Repairs',
          'Unclog Pipes',
          'Change Bathtub for Shower',
          'Sink/Faucet Installation & Repairs',
          'General Plumbing Services',
          'Other']
      },
      {
        colored: 'upholstery_colored-en.png',
        uncolored: 'upholstery-en.png',
        en: 'Upholstery',
        es: 'Tapicería',
        sub_categories_en: ['Small Furniture (chairs, shelves)',
          'Big Furniture (wardrobe, sofa)',
          'Furniture Repairs',
          'Furniture Restoration']
      },
    ]
  }
  render() {
    this.provided_services = this.services.map((service, key) =>
      <Service key={key} test={key} heading={service[this.props.language]} sub_categories={service.sub_categories_en} image_src_uncolored={service.uncolored} image_src_colored={service.colored} />
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
