import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import '../style/signin.css'
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import {signIn} from '../store/actions/authActions'
import {Redirect} from 'react-router-dom'

class SignIn extends Component {
state={
    // name:'',
    email:'',
    password:''
}

    hanleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    hanleSubmit=()=>{
        this.props.signIn(this.state)
    }
 
    render() { 
        if(this.props.isConnected){
            return <Redirect to="/"></Redirect>
        }
        return (<>
        <h2> Halo Guest.<br/>Please Sign In</h2>
            <div className="form-container">
                <form className="form" onSubmit={this.hanleSubmit} action="">
               
                {/* <TextField id="name" label="name" variant="filled" onChange={this.hanleChange}/> */}
                <TextField id="email" label="email" variant="filled" onChange={this.hanleChange}/>
                <TextField id="password" label="password" variant="filled" onChange={this.hanleChange}/>
                <Button type='submit' style={{width:'200px',height:'40px',backgroundColor:'green'}} variant="contained" color="primary">LOG IN</Button>
        {this.props.authError ? <p>{this.props.authError}</p> : null}
               
                </form>
            </div>
            </>
        )
    }
}
const mapStateToProps= (state) => {
    console.log(state.auth.authError);
    
    return {
        authError:state.auth.authError,
        isConnected :!!state.firebase.auth.uid
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        signIn:(creds)=>dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)