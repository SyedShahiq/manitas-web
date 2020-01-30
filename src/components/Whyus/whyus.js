import React, { Component } from 'react';
import './whyus.css';
class WhyUs extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="why-us" className="why-us wrapper">
                    <h1>{this.props.content.why_us.heading}</h1>
                    <div className="column first-col">
                        <h1>Title Here</h1>
                        <p>content here</p>
                    </div>
                    <div className="column second-col">
                        <h1>Title Here</h1>
                        <p>content here</p>
                    </div>
                </div>
            </React.Fragment>
        );

    }
}
export default WhyUs;