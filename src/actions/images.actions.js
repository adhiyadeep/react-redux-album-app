import {getApi} from '../service/api';
import {LOADING_DATA,FETCH_IMAGE_SUCCESS,FETCH_IMAGE_FAIL} from '../types/types'

export const getImageList = (payload) => {
      return async (dispatch) => {
        try {
            dispatch({
              type: LOADING_DATA
            });
            const response = await getApi(payload);
            if(response.length) {

             response.map((element)=>{
               element.isFav = false
             })

              dispatch({
                  type: FETCH_IMAGE_SUCCESS,
                  payload: response
              });
              return response;
            } else {
              throw response;
            }
  
          } catch (error) {
              dispatch({
                  type: FETCH_IMAGE_FAIL,
                  payload: error.responseBody
              });
              return error;
          }
      }
}