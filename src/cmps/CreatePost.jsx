import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import '../style/create.css'
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import {create} from '../store/actions/postActions'
import {Redirect} from 'react-router-dom'

 class createPost extends Component {
    state={
   title:'',
   content:'',
   by:this.props.user


}

    hanleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    hanleSubmit=()=>{
        this.props.createPost(this.state)
    }
 
    render() { 
        if(!this.props.isConnected){
            return <Redirect to="/signin"></Redirect>
        }
        return (<>
        <h2>CREATE</h2>
            
                <form className="create-form" onSubmit={this.hanleSubmit} action="">
               
                <TextField id="title" label="title"  onChange={this.hanleChange}/>
                <TextField id="content" label="content"  onChange={this.hanleChange}/>
                <Button type='submit' style={{width:'200px',height:'40px',backgroundColor:'green'}} variant="contained" color="primary">POST</Button>
               
                </form>
            
            </>
        )
    }
}

const mapStateToProps = (state) => {
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

const mapDispatchToProps = (dispatch) =>{
    return {
        createPost:(post)=>dispatch(create(post))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(createPost)
