import { combineReducers } from 'redux';
import {LOADING_DATA,FETCH_ALBUM_SUCCESS,FETCH_ALBUM_FAIL,FETCH_IMAGE_SUCCESS,FETCH_IMAGE_FAIL,
  ADD_ITEM_SUCCESS,ADD_ITEM_FAIL} from '../types/types'


const initialAlbumState = {
  isLoading: true,
  isError: false,
  isSuccess: false,
  error: null,
  data: null,
};

const initialImageState = {
  isLoading: true,
  isError: false,
  isSuccess: false,
  error: null,
  data: null,
}


const getAlbumList = (state = initialAlbumState, action) => { 

    switch (action.type){
      case LOADING_DATA: 
           return {...state, data:null};
     
      case FETCH_ALBUM_SUCCESS:
        
          return {...state, data:action.payload,isSuccess:true};

      
      case FETCH_ALBUM_FAIL:
        return {...state, data:null,isSuccess:false,isError: true,  errors: action.payload,};

          default:
            return initialAlbumState;
    }
}


const getImageList = (state = initialImageState, action) => {
  switch (action.type){
      case LOADING_DATA: 
      return {...state, data:null};

      case FETCH_IMAGE_SUCCESS:
        return {...state, data:action.payload,isSuccess:true};

      case FETCH_IMAGE_FAIL:
        return {...state, data:null,isSuccess:false,isError: true,  errors: action.payload};

      default:
          return initialImageState;
  }
}

const addFavItem = (state = {}, action) =>{
  switch (action.type) {
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}





export default combineReducers({
    getAlbumList,
    getImageList,
  });