import React, { Component } from 'react';
import './Aboutus.css';

class AboutUs extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="about-us">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="heading">{this.props.content.about_us.heading}</h1>
                                <p className="content">{this.props.content.about_us.body}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default AboutUs;
