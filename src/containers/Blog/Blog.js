import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

class Blog extends Component {
    // state ={
    //     posts:[],
    //     selectedPostId:null,
    //     errTxt:false
    // }
    // componentDidMount(){
    //     axios.get('/posts')
    //     .then(resp =>{
    //         const posts = resp.data.slice(0,6);
    //         const updatePost = posts.map(post =>{
    //             return{
    //                 ...post,
    //                 Author:'iddiMsangi'
    //             }
    //         })
    //         // console.log(resp)
    //         this.setState({
    //             posts:updatePost
    //         })
    //     })
    //     .catch(err =>{
    //         // console.log(err);
    //         this.setState({
    //             errTxt:true
    //         })
    //     });
    // }
   postSelected = (id) =>{
        this.setState({
            selectedPostId:id
        });
        console.log(id);
    }
    render () {
        // let posts = <p style={{textAlign:'center'}}>SOMETHING WENT WRONGG........!!</p>
        // if(!this.state.errTxt){
        //     posts = this.state.posts.map((post) =>{
        //         return <Post 
        //         title ={post.title} 
        //         Author ={post.Author}
        //         key={post.id}
        //         clicked ={() => this.postSelected(post.id)}
        //          />
        //     });
        // }
       
     
        return (
            <div>
                 <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
               </Header>
                {/* <section className="Posts">
                    {/* <Post />
                    <Post />
                    <Post /> *}
                    {posts}
                </section> */}
                <section>
                    <FullPost 
                    id={this.state.selectedPostId}
                     />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;