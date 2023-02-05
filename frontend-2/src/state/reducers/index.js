import {combineReducers} from 'redux'
import Reducer from './Reducer'

const reducers = combineReducers({
      token:Reducer,
});

export default reducers;