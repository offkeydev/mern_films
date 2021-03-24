import {combineReducers} from "redux"
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'

import errors from "./reducers/errors";
import loader from "./reducers/loader";
import filter from "./reducers/filter";
import movies from "./reducers/movies";
import modal from "./reducers/modal"
import user from "./reducers/user"

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', ]
}


const rootReducer = combineReducers({
    errors,
    loader,
    filter,
    movies,
    modal,
    user,
})
export default persistReducer(persistConfig, rootReducer)