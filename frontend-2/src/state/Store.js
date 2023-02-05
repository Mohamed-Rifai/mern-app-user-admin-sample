import {legacy_createStore as createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Reducer from './reducers/index'


export const store = createStore(
    Reducer,
    {},
    applyMiddleware(thunk)

)