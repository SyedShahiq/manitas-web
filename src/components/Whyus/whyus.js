import React, { Component } from 'react';
import './whyus.css';
class WhyUs extends Component {
    state = {
        why_us_content:''
    }
    show_user_details = (user) => {
        this.setState({
            why_us_content: user
        })
    }
    render() {
        var user_a_points = this.props.content.why_us.user_a.points.map((point, index) => {
            return <li key={index}><i className="check fa fa-check"></i>{point}</li>
        });
        var user_b_points = this.props.content.why_us.user_b.points.map((point, index) => {
            return <li key={index}><i className="check fa fa-check"></i>{point}</li>
        })
        let user_details = '';
        if(this.state.why_us_content === 'a') {
            user_details = <div className="points">
                <ul> {user_a_points} </ul>
                </div>
        } else if(this.state.why_us_content === 'b') {
            user_details = <div className="points">
            <ul> {user_b_points} </ul>
            </div>
        }
        return (
            <React.Fragment>
                <div id="why-us" className="why-us wrapper">
                    <h1 className="heading">{this.props.content.why_us.heading}</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <h1 onClick={()=>this.show_user_details('a')} className="user-heading-a">{this.props.content.why_us.user_a.heading}</h1>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <h1 onClick={()=>this.show_user_details('b')}  className="user-heading-b">{this.props.content.why_us.user_b.heading}</h1>
                            </div>
                        </div>
                    </div>
                    {user_details}
                </div>
            </React.Fragment>
        );

    }
}
export default WhyUs;