export const create=(post)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        //async func
        const firestore =getFirestore()
        firestore.collection('posts').add({
            ...post,
            // authorFirstName:post.by.name,
            // authorLastName:post.by.lastName,
            // authorId:post.by.id,
            createdAt: new Date()
        }).then(()=>{
            dispatch({type:'CREATE_POST',val:post})
        }).catch((err)=>{
            dispatch({type:'CREATE_POST_ERROR',err})
        })
    }
}
