import React, { Component } from 'react';
import './whyus.css';
class WhyUs extends Component {
    render() {
        var user_a_points = this.props.content.why_us.user_a.points.map((point) => {
            return <li>{point}</li>
        });
        var user_b_points = this.props.content.why_us.user_b.points.map((point) => {
            return <li>{point}</li>
        })
        return (
            <React.Fragment>
                <div id="why-us" className="why-us wrapper">
                    <h1 className="heading">{this.props.content.why_us.heading}</h1>
                    <div className="column first-col">
                        <ul>
                            <h1>{this.props.content.why_us.user_a.heading}</h1>
                            {user_a_points}
                        </ul>
                    </div>
                    <div className="column second-col">
                        <ul>
                            <h1>{this.props.content.why_us.user_b.heading}</h1>
                            {user_b_points}
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );

    }
}
export default WhyUs;