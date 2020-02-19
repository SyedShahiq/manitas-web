import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import axios from '../../axios';
import './SingleBlog.css';

class SingleBlog extends Component {
    state = {
        posts: {}
    }
    componentWillMount() {
        var id = this.props.match.params.id;
        axios.get('/api/blogs/'+id+'/')
            .then(response => {
                this.setState({
                    posts: response.data
                })
            })
            .catch(error => {
            });
    }
    render() {
        return (
            <React.Fragment>
                <div className="single-blog">
                <h1 className="heading">{this.state.posts.title}</h1>
                    <div className="container blog-body">
                        {Object.keys(this.state.posts).length > 0 ? renderHTML(this.state.posts.body):''}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default SingleBlog;