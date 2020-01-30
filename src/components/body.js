import React, { Component } from 'react';
import Services from './Services/services';
import Slider from './Slider/slider';
import WhyUs from './Whyus/whyus';

class Body extends Component {
  render() {
    return (
      <main role="main" className="main">
        <Slider content={this.props.content} />
        <Services language={this.props.language} />
        <WhyUs content={this.props.content} />
      </main>
    );
  }
}
export default Body;