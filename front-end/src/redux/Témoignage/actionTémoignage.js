import {GET_ALL_TÉMOIGNAGES_SUCCEED ,GET_ALL_TÉMOIGNAGES_FAILED}from './actionType'
import {fetchAllTémoignages } from '../../Request/request'

//Get All Témoignages
     export function getAllTémoignages() {
        return dispatch => {
            fetchAllTémoignages()
            .then (Témoignage =>dispatch (
                {type: GET_ALL_TÉMOIGNAGES_SUCCEED,payload: Témoignage}) 
            )
    
            .catch(err=>dispatch( {
                type: GET_ALL_TÉMOIGNAGES_FAILED,
                payload: err
              }))
        }
    
    }