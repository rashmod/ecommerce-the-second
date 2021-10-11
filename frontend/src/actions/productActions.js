import axios from 'axios';

import {
	ALL_PRODUCTS_REQUEST,
	ALL_PRODUCTS_SUCCESS,
	ALL_PRODUCTS_FAIL,
	CLEAR_ERRORS,
} from '../constants/productConstants';

export const getProducts = () => async (dispatch) => {
	try {
		dispatch({ type: ALL_PRODUCTS_REQUEST });

		const { data } = await axios.get('/api/products');

		dispatch({
			type: ALL_PRODUCTS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: ALL_PRODUCTS_FAIL,
			payload: error.response.data.errMessage,
		});
	}
};

//* Clear errors
export const clearErrors = () => async (dispatch) => {
	dispatch({
		type: CLEAR_ERRORS,
	});
};