import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css'
class FullPost extends Component {
    state = {
        loadedData:null
    }
componentDidUpdate(){
    axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.id)
    .then(resp =>{
        // console.log(resp);
        this.setState({
            loadedData:resp.data
        })
    })
}
    render () {
        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
        if(this.props.id){
           post = <p style={{textAlign:'center'}}>loading...</p>;
        }
        if(this.state.loadedData){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedData.title}</h1>
                    <p>{this.state.loadedData.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
            );
           
        }
      
        return post;
    }
}

export default FullPost;