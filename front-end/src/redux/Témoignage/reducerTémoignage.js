import {GET_ALL_TÉMOIGNAGES_SUCCEED }from './actionType'
const statez = {
    témoignage:[]
};

export  const témoignagesReducer = (state = statez, action ) => {
    const { type, payload } = action;
    switch( type) {
        case   GET_ALL_TÉMOIGNAGES_SUCCEED :
            return {
                ...state,
                témoignage: payload 
              }
             
    }
return state
};