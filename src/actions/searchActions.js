import ActionTypes from '../constants/actionTypes';
import axios from 'axios';

export function loadSearchSuccess(searches) {
  return { type: ActionTypes.LOAD_SEARCH_SUCCESS, searches };

}

export function loadSearches() {
  return function (dispatch) {
    return axiosCall().then(searches => {
      dispatch(loadSearchSuccess(searches));
    }).catch(error => {
      throw (error);
    });
  };
}export function loadNewSearches(search) {
  return function (dispatch) {
    return axiosNSCall(search).then(searches => {
      dispatch(loadSearchSuccess(searches));
    }).catch(error => {
      throw (error);
    });
  };
}



export function axiosCall(){ 
   return axios.get( ActionTypes.API_CALL+"countries").then(response => response.data);
}

export function axiosNSCall(search){ 
   return axios.get( ActionTypes.API_CALL+"countries/"+search).then(response => response.data);
}

