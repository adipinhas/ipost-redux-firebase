export const signIn = (credentials) =>{
    return (dispatch,getState,{getFirebase}) =>{
        const firebase = getFirebase()
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type: 'LOGIN_SUCCESS'})
        }).catch((err)=>{
            dispatch({type: 'LOGIN_FAILED',err})
        })
     }
}

export const signOut = () => {
    return (dispatch,getState,{getFirebase}) =>{
    
        const firebase = getFirebase()
        firebase.auth().signOut()
        .then(() => {
                dispatch({type:'SIGNOUT_SUCCESS'})
            }).catch(()=>{
                alert('err')
            })
        
    }
}

export const SignUpAuth = (userDetails) =>{
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        
        firebase.auth().createUserWithEmailAndPassword(
            userDetails.email,
            userDetails.password,
            ).then((res) => {
                return firestore.collection('users').doc(res.user.uid).set({
                    name:userDetails.name,
                    lastName:userDetails.lastName,
                    initials:userDetails.name[0] + userDetails.lastName[0]
                }).then(()=>{
                    
                    dispatch({type:'SIGNUP_SUCCESS'})
                }).catch((err)=>{
                    dispatch({type:'SIGNUP_FAILD',err})
                })
        })
        

    }
}