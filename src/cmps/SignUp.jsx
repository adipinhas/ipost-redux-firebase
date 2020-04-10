import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import '../style/signin.css'
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import {SignUpAuth} from '../store/actions/authActions'
import {Redirect} from 'react-router-dom'

class SignUp extends Component {
state={
    name:'',
    lastName:'',
    email:'',
    password:''
}

    hanleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    hanleSubmit=()=>{
        this.props.signUp(this.state)
    }
 
    render() {
        if(this.props.isConnected){
           return <Redirect to="/"></Redirect>
        }
        return (<>
        <h2>CREATE ACCOUNT</h2>
            <div className="form-container">
                <form className="form" onSubmit={this.hanleSubmit} action="">
                <TextField id="lastName" label="lastName" variant="filled" onChange={this.hanleChange}/>
                <TextField id="name" label="name" variant="filled" onChange={this.hanleChange}/>
                <TextField id="email" label="email" variant="filled" onChange={this.hanleChange}/>
                <TextField id="password" label="password" variant="filled" onChange={this.hanleChange}/>
                <Button type='submit' style={{width:'200px',height:'40px',backgroundColor:'green'}} variant="contained" color="primary">LOGIN</Button>

               
                </form>
            </div>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        // authError:state.auth.authError,
        isConnected :!!state.firebase.auth.uid
    }
}
const mapDispatchToProps =(dispatch) => {
    return {
        signUp:(userDetails)=>dispatch(SignUpAuth(userDetails))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
