import {AppContext} from '../../App';
import React from 'react';

export const useCart = () => {
	const {cartItems, setCartItems} = React.useContext(AppContext);
	const totalPrice = cartItems.reduce((sum, obj) => sum + obj.price, 0);
	const tax = totalPrice * 0.13; 
	return { cartItems, totalPrice, setCartItems, tax };
}

