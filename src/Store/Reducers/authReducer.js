import initialState from "./initialState";

export function authReducer(state=initialState.authError,action) {

    if(action.payload === 'SIGN_UP_SUCCESS'){

        return state;

    }else if(action.type === 'SIGN_OUT_SUCCESS'){

        return state;

    }else if(action.type === 'SIGN_IN_SUCCESS'){

        return state;

    }else if(action.type === 'SIGN_IN_ERROR'){

        console.log(action.err);
        return action.err;

    }else {

        return state;

    }

}
export default authReducer;