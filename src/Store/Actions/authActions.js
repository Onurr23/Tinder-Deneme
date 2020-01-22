export function signUp(kimlik) {

    return(dispatch,getState,{getFirebase,getFirestore})=>{

        const firebase = getFirebase();
        const firestore = getFirestore();


        firebase.auth().createUserWithEmailAndPassword(kimlik.email,kimlik.password).then((response)=>{


          return  firestore.collection('users').doc(response.user.uid).set({

               id : response.user.uid,
               age : kimlik.age,
               bio : kimlik.bio,
               img : kimlik.imageURL,
               name : kimlik.name,
               likedUsers : [],
               dislikedUsers : [],
               superlikedUsers : [],
               visitedUsers : []


           })

        }).then(()=>{

            dispatch({type : 'SIGNUP_SUCCESS'})

        })
    }
}

export function signOut() {

    return(dispatch,getState,{getFirebase})=>{

        const firebase = getFirebase();

        firebase.auth().signOut().then(()=>{

            dispatch({type : 'SIGN_OUT_SUCCESS'})

        })

    }

}

export function signIn(kimlik) {

    return(dispatch,getState,{getFirebase})=>{

        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(kimlik.email,kimlik.password).then(()=>{

            dispatch({type : 'SIGN_IN_SUCCESS'})

        }).catch(err=>{

            dispatch({type : 'SIGN_IN_ERROR',err})

        })

    }

}

export default {signUp,signOut,signIn};