import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
	productDetailReducer,
	productReducer,
} from '../reducers/productReducers';

const reducer = combineReducers({
	products: productReducer,
	productDetail: productDetailReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
