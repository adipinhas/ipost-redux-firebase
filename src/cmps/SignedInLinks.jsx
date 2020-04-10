import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import '../style/nav.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../store/actions/authActions'

class SignedInLinks extends Component {
onLogOut = () => {
  
  this.props.logOut()
}

    render() {
        return (
                 <div className='in-links'>
                  <ul className="list">
                    <li onClick={this.onLogOut}> Log Out</li>
                    <li><Link className="link" to="/create">CREATE POST</Link></li>
                  </ul>
                  <Avatar alt="A"/>
                </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    logOut:()=>dispatch(signOut()) 
  }
}

export default connect(null,mapDispatchToProps)(SignedInLinks)

  
  