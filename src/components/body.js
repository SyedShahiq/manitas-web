import React, { Component } from 'react';
import Slider from './Slider/slider';
import Services from './Services/services';

class Body extends Component {
  render() {
    return (
      <main role="main" className="main">
        <Slider content={this.props.content} />
        <Services />
      </main>
    );
  }
}
export default Body;