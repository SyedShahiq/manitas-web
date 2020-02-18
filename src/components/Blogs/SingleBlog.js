import React, { Component } from 'react';
import axios from '../../axios';
import Blog from './Blog';
import './Blogs.css';

class SingleBlog extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('/api/blogs/')
            .then(response => {
                this.setState({
                    posts: response.data
                })
            })
            .catch(error => {
            });
    }
    render() {
        var blogs = this.state.posts.slice(0, 3).map((post, index) => {
            return <Blog key={index} title={post.title} body={post.body}></Blog>
        })
        return (
            <React.Fragment>
                <div id="blogs" className="container blogs">
                    <h1 className="heading">Blogs</h1>
                    <div className="row">
                        {blogs}
                    </div>
                </div>

            </React.Fragment>
        )
    }
}
export default SingleBlog;