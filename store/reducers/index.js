import { combineReducers } from 'redux';

import navListReducer from '../reducers/navList';
import productReducer from '../reducers/product';
import currencyReducer from '../reducers/currency';

const appReducer = combineReducers({
	navList: navListReducer,
	products: productReducer,
	currency: currencyReducer
});

export const rootReducer = (state, action) => {
	return appReducer(state, action);
};