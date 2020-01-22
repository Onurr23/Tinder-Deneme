import {combineReducers} from "redux";
import userReducer from "./userReducer";
import {firestoreReducer} from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase";
import likeReducer from "./likeReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({

userReducer,
    firestore : firestoreReducer,
    firebase : firebaseReducer,
    likeReducer,
    authReducer

})

export default rootReducer;