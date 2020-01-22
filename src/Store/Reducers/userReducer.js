import initialState from "./initialState";

export function userReducer(state=initialState.users,action) {

    if(action.type=== 'LIKE_USER'){

        return state;

    }else if(action.type === 'DISLIKE_USER'){

        return state;

    }else{

        return state;

    }


}

export default userReducer;
