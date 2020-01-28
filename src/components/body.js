import React, { Component } from 'react';
import Slider from './Slider/slider';
import Services from './Services/services';
import WhyUs from './Whyus/whyus';

class Body extends Component {
  render() {
    return (
      <main role="main" className="main">
        <Slider content={this.props.content} />
        <Services language={this.props.language} />
        <WhyUs />
      </main>
    );
  }
}
export default Body;