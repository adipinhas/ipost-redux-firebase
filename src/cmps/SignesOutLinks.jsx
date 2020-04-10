import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../style/nav.css'

export default class SignesOutLinks extends Component {
    render() {
        return (
            <div className='in-links'>
                <ul className="list">
                    <li><Link className="link" to="/signin">SIGN IN </Link></li>
                    <li><Link className="link" to="/signup"> CREATE ACCOUNT</Link></li> 
                </ul>
                
            </div>
        )
    }
}
