import React, { Component } from 'react';
import axios from '../../axios';
import './AllBlogs.css';
import Blog from './Blog';

class AllBlogs extends Component {
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
        var blogs = this.state.posts.map((post, index) => {
            return <Blog key={index} post_id={post.id} title={post.title} body={post.body}></Blog>
        })
        return (
            <React.Fragment>
                <div id="blogs" className="container all-blogs">
                    <h1 className="heading">Blogs</h1>
                    <div className="row">
                        {blogs}
                    </div>
                </div>

            </React.Fragment>
        )
    }
}
export default AllBlogs;