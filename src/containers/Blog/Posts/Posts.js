import React, { Component } from 'react';
class Posts extends Component{
    state ={
        posts:[],
        selectedPostId:null,
        errTxt:false
    }

    componentDidMount(){
        axios.get('/posts')
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
        })
        .catch(err =>{
            // console.log(err);
            this.setState({
                errTxt:true
            })
        });
    }

    render(){
        let posts = <p style={{textAlign:'center'}}>SOMETHING WENT WRONGG........!!</p>
        if(!this.state.errTxt){
            posts = this.state.posts.map((post) =>{
                return <Post 
                title ={post.title} 
                Author ={post.Author}
                key={post.id}
                clicked ={() => this.postSelected(post.id)}
                 />
            });
        }
        return(
            <section className="Posts">
                    {posts}
                </section>
        )
    }
}