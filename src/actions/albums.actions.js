import {getApi} from '../service/api';
import {LOADING_DATA,FETCH_ALBUM_SUCCESS,FETCH_ALBUM_FAIL} from '../types/types'

export const getAlbumList = (payload) => {    
  return async (dispatch) => {
        try {
            dispatch({
              type: LOADING_DATA
            });
            
            const response = await getApi(payload);
            if(response.length) {
              dispatch({
                  type: FETCH_ALBUM_SUCCESS,
                  payload: response
              });
              return response;
            } else {
              throw response;
            }
  
          } catch (error) {
              dispatch({
                  type: FETCH_ALBUM_FAIL,
                  payload: error.responseBody
              });
              return error;
          }
      }
}