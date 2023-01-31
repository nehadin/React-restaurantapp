import { createStore,combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Reducer
const reducers=combineReducers({

})

// Middleware
const middleware=[thunk]

// create store
const store=createStore(reducers,applyMiddleware(...middleware))

export default store