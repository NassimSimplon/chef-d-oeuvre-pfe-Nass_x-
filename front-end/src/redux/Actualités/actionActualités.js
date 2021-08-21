import {GET_ALL_ACTUALITÉS_SUCCEED, GET_ALL_ACTUALITÉS_FAILED }from './actionType'
import {fetchAllActualités } from '../../Request/request'

//Get All  Actualités
     export const getAllActualités = () => {
        return dispatch => {
            fetchAllActualités()
            .then (Actualité =>dispatch (
                {type: GET_ALL_ACTUALITÉS_SUCCEED,payload: Actualité}) 
            )
    
            .catch(err=>dispatch( {
                type: GET_ALL_ACTUALITÉS_FAILED,
                payload: err
              }))
        }
    
    }