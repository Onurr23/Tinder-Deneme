export function like(user,likes){

    return(dispatch,getState,{getFirestore})=>{

        const firestore = getFirestore();

        const id = getState().firebase.auth.uid;



        firestore.collection('users').doc(id).update({

            likedUsers : likes

        }).then(()=>{

            dispatch({type : 'LIKED_SUCCESS'});

        })

    }

}

export function dislike(user,likes){

    return(dispatch,getState,{getFirestore})=>{

        const firestore = getFirestore();

        const id = getState().firebase.auth.uid;



        firestore.collection('users').doc(id).update({

            dislikedUsers : likes

        }).then(()=>{

            dispatch({type : 'DISLIKED_SUCCESS'});

        })

    }

}

export function superlike(user,likes){

    return(dispatch,getState,{getFirestore})=>{

        const firestore = getFirestore();

        const id = getState().firebase.auth.uid;



        firestore.collection('users').doc(id).update({

            superlikedUsers : likes

        }).then(()=>{

            dispatch({type : 'SUPERLIKED_SUCCESS'});

        })

    }

}

export function seen(users) {

    return(dispatch,getState,{getFirestore})=>{

        const firestore = getFirestore();

        const id = getState().firebase.auth.uid;


        firestore.collection('users').doc(id).update({

            visitedUsers : users

        }).then(()=>{

            dispatch({type : 'VISITED_SUCCESS'});

        })


    }

}



export default {like,dislike,superlike,seen};