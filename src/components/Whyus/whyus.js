import React, { Component } from 'react';
import './whyus.css';
class WhyUs extends Component {
    render() {
        var user_a_points = this.props.content.why_us.user_a.points.map((point,index) => {
            return <li key={index}>{point}</li>
        });
        var user_b_points = this.props.content.why_us.user_b.points.map((point,index) => {
            return <li key={index}>{point}</li>
        })
        return (
            <React.Fragment>
                <div id="why-us" className="why-us wrapper">
                    <h1 className="heading">{this.props.content.why_us.heading}</h1>
                    <div className="column first-col">
                        <h1 className="user-heading">{this.props.content.why_us.user_a.heading}</h1>
                        <ul>
                            {user_a_points}
                        </ul>
                    </div>
                    <div className="column second-col">
                        <h1 className="user-heading">{this.props.content.why_us.user_b.heading}</h1>
                        <ul>
                            {user_b_points}
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );

    }
}
export default WhyUs;