const initState ={
    authError:null,
    // isConnected:false
}



const authReducer =(state= initState,action)=>{
    switch(action.type){
        case 'LOGIN_FAILED' :
            console.log('err');
            
            return {
                ...state,
                authError:'Login Failed'
            }
            case 'LOGIN_SUCCESS' :
                console.log('SUCCESSS');
                return {
                    ...state,
                    authError:null,
                    // isConnected:true
            }
            case 'SIGNOUT_SUCCESS' :
                console.log('signout success')
                return {
                    ...state,
                    // isConnected:false
                }
            case 'SIGNUP_SUCCESS' : 
                console.log('yesssss')
                return {
                        ...state,
                        authError:null
                    }
            
            // case 'SIGNUP_FAILED' : 
            // return {
            //         ...state,
            //         authError:action.err.massage
            //     }
            }
    return state
}
export default authReducer
