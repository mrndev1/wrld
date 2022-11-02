import { createStore, combineReducers, applyMiddleware } from "redux";
import reducer_countries from "./reducers/reducer_countries";
import thunk from 'redux-thunk';

const reducers = combineReducers({reducer_countries});
const store = createStore(reducers, applyMiddleware(thunk));
export default store;