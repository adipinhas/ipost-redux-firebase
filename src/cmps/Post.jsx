import React, { Component } from 'react'
import '../style/post.css'
export default class Post extends Component {
    render() {
        return (
            <div className='post'>
                <h3>{this.props.post.title}</h3>
                <h4>by: {this.props.post.by.name}</h4>
                <p>{this.props.post.content}</p>
            </div>
        )
    }
}
