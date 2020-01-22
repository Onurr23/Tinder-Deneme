import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDPEsekkfE2dpcd2JaoeuES6xKV3N-ER1Q",
    authDomain: "tinder-deneme-922f4.firebaseapp.com",
    databaseURL: "https://tinder-deneme-922f4.firebaseio.com",
    projectId: "tinder-deneme-922f4",
    storageBucket: "tinder-deneme-922f4.appspot.com",
    messagingSenderId: "681697515041",
    appId: "1:681697515041:web:3be2576b69e0b0dc90b560"
};

firebase.initializeApp(firebaseConfig);


export default firebase;