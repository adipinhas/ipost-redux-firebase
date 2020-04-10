import React, { Component } from 'react'
import Post from './Post'
import '../style/post-list.css'
import uuid from 'react-uuid'
import {Link} from 'react-router-dom'
export default class PostList extends Component {
    render() {
        const posts = this.props.posts

        return (
            <div className="post-list">
               {posts && posts.map((post)=>{
                   
                    return <Link key={uuid()} className="link-black" to={`/post/${post.id}`}>
                            <Post key={uuid()} post={post}/>
                        </Link>
        })}
              
            </div>
        )
    }
}
