import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import './Blog.css';
class Blog extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-sm-4">
                    <img className="blog-img" height="200" width="350" src={require('../Slider/images/slider4.jpg')} alt="Blogs"></img>
                    <h5 className="post-title">{this.props.title}</h5>
                    <div>{renderHTML(this.props.body.substr(0, 250))}</div>
                </div>
            </React.Fragment>
        )
    }
}
export default Blog;