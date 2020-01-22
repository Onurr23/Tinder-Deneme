import initialState from "./initialState";

export function likeReducer(state=initialState.liked,action){


    if(action.type === 'LIKED_SUCCESS'){

        console.log('Beğenildi !');
        return state;

    }else if(action.type === 'DISLIKED_SUCCESS'){

        return state;

    }else if(action.type === 'SUPERLIKED_SUCCESS'){

        return state;

    }else if(action.type === 'VISITED_SUCCESS'){

        return state;

    } else {

        return state;
    }

}

export default likeReducer;