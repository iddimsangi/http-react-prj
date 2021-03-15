import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state ={
        posts:[],
        selectedPostId:null
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(resp =>{
            const posts = resp.data.slice(0,6);
            const updatePost = posts.map(post =>{
                return{
                    ...post,
                    Author:'iddiMsangi'
                }
            })
            // console.log(resp)
            this.setState({
                posts:updatePost
            })
        });
    }
   postSelected = (id) =>{
        this.setState({
            selectedPostId:id
        });
        console.log(id);
    }
    render () {
        const posts = this.state.posts.map((post) =>{
            return <Post 
            title ={post.title} 
            Author ={post.Author}
            key={post.id}
            clicked ={() => this.postSelected(post.id)}
             />
        })
        return (
            <div>
                <section className="Posts">
                    {/* <Post />
                    <Post />
                    <Post /> */}
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;