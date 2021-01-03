
import { combineReducers } from 'redux';
import albumReducer from "./album.reducer";

const reducers = {
    albumReducer,
};

const appReducer = combineReducers(reducers);

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer;