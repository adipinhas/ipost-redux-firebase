import React, { Component } from 'react'

import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'

class PostDetails extends Component {
    render() {

        console.log(this.props.post)
        return (
            <div>
              {this.props.post && ( <>
                <h2>{this.props.post.title}</h2> 
                
                 <h4>{this.props.post.content}</h4> 

              </>)}
            </div>
        )
    }
}

const mapStateToProps =(state,ownProps)=>{
    const id = ownProps.match.params.id
    const posts = state.firestore.data.posts
    return {
         post : posts ? posts[id] : null
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'posts'}
    ])
) (PostDetails)
