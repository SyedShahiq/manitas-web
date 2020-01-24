import React, { Component } from 'react';
import Slider from './Slider/slider';

class Body extends Component {
  render() {
    return (
      <main role="main" className="main">
        <Slider content={this.props.content} />
      </main>
    );
  }
}
export default Body;