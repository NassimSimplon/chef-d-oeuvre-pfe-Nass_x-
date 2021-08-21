import {GET_ALL_ACTUALITÉS_SUCCEED }from './actionType'
const actualitéState = {
    actualité:[]
};

export  const actualitéReducer = (state = actualitéState, action ) => {
    const { type, payload } = action;
    switch( type) {
        // get All actualité
        case   GET_ALL_ACTUALITÉS_SUCCEED :
            return {
                ...state,
                actualité: payload 
              }
             
    }
return state
};