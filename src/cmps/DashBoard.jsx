import React, { Component } from 'react'
import Postlist from './PostList'
import Notifications from './Notifications'
import '../style/dashboard.css'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
 class DashBoard extends Component {
    render() { 
        // console.log(this.props.isConnected)
        if(!this.props.isConnected){
            return <Redirect to="/signin"></Redirect>
        } 
        const posts = this.props.posts
        return (
            <div className="dashboard">
                <Postlist posts={posts}></Postlist>
                <Notifications></Notifications>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    //  console.log(state)
    return {
        // posts:state.post.posts
        posts:state.firestore.ordered.posts,
        isConnected :!!state.firebase.auth.uid,
        users:state.firestore.ordered.users
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'posts'},
        {collection:'users'}
    ])
) (DashBoard)