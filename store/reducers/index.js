import { combineReducers } from 'redux';

import navListReducer from '../reducers/navList';
import productReducer from '../reducers/product';
import currencyReducer from '../reducers/currency';
import cartReducer from '../reducers/cart';
import authReducer from '../reducers/auth';

const appReducer = combineReducers({
	navList: navListReducer,
	products: productReducer,
	currency: currencyReducer,
	cart: cartReducer,
	auth: authReducer,
});

export const rootReducer = (state, action) => {
	return appReducer(state, action);
};