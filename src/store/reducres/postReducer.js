import uuid from 'react-uuid'
const initState ={
    posts:[
        {id:uuid(),title:'help me install redux',content:'blah blah'},
        {id:uuid(),title:'my recipe for dlicious cookies',content:'blah blah'},
        {id:uuid(),title:'party tonight',content:'blah blah'}
    ]
}



const postReducer =(state= initState,action)=>{
   switch (action.type){
       case 'CREATE_POST':
           return{
                ...state,
                posts:state.posts.concat({id:uuid(),title:action.val.title,content:action.val.content})
           }
           case 'CREATE_POST_ERROR':
               console.log('samac',action.err)
               return state
          
   }

    return state
}
export default postReducer
