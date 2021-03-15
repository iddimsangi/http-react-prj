import axios from 'axios';
import React, { Component } from 'react';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max'
    }
    addPostHandler = () =>{
        const post = {
            post_title:this.state.title,
            post_body:this.state.content,
            post_author:this.state.author
        }
        axios.post('https://jsonplaceholder.typicode.com/posts', post)
        .then(res =>{
            console.log(res);
        })

    }
    render () {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button 
                onClick={this.addPostHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;