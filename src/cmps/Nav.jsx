import React, { Component } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import { green } from '@material-ui/core/colors'
import { AppBar } from '@material-ui/core'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignesOutLinks'
import shadows from '@material-ui/core/styles/shadows'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
// import {firestoreConnect} from 'react-redux-firebase'
// import {compose} from 'redux'

class Nav extends Component {
    render() { 
        // const user = this.props.users ?  this.props.users.find((user)=>{
        //     return user.id === this.props.connectedUserId
        // }):null
        // console.log(user);
        const user = this.props.user
        
        //  console.log(this.props.isConnected,'bobib')
        return (
            <Toolbar variant='regular' style={{display:'flex',justifyContent:'space-between', backgroundColor:green[900],color:'white'}}>
                <Link className="link" to="/">
                    <h1>i POST</h1>
                </Link>
                {user && <h4>Halo, {user.name}</h4>}
                {this.props.isConnected ? <SignedInLinks></SignedInLinks> :
                 <SignedOutLinks></SignedOutLinks>}
                    
                   
            </Toolbar>



)
}
}
const mapStateToProps = (state)=>{
    console.log(state)
    const user = state.firestore.ordered.users ?  state.firestore.ordered.users.find((user)=>{
        return user.id === state.firebase.auth.uid
    }):null
   
    return {
        isConnected :!!state.firebase.auth.uid,
        // connectedUserId:state.firebase.auth.uid,
        // users:state.firestore.ordered.users,
        user:user
        
    }

}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'posts'},
        {collection:'users'}
    ])
)(Nav)
    
