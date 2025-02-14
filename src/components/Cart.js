import React from 'react';
import Info from './Info';
import { AppContext } from '../App';
import axios from 'axios';


function Cart({ onClose, onRemove, items = [] }) {
	const { cartItems, setCartItems } = React.useContext(AppContext);
	const [isOrderComplete, setisOrderComplete] = React.useState(false);
	const [orderId, setOrderId] = React.useState(null);
	const [isLoading, setisLoading] = React.useState(false);

	const onClickOrder = async () => {
		try {
			setisLoading(true);
			const { data } = await axios.post('https://67aa241765ab088ea7e5ca00.mockapi.io/cart/ordered', {items : cartItems});
			
            setOrderId(data.id);
            setisOrderComplete(true);
            setCartItems([]);

				for (let i = 0; i < Array.length; i++) {
					const item = cartItems[i];
					await axios.delete('https://67aa241765ab088ea7e5ca00.mockapi.io/cart' + item.id);
				}
				
		} catch (error) {
		  alert('Ошибка при создании заказа :(')	
		}
		setisLoading(false);
	}

	const totalPrice = cartItems.reduce((sum, obj) => sum + obj.price, 0);
   const tax = totalPrice * 0.13; 
    return (
        <div className="overlay">
            <div className="cart-block">
                <h2>
                    Корзина <img onClick={onClose} className="item__remove" src="/img/btn-remove.svg" alt="remove" />
                </h2>

                {items.length > 0 ? (
                    <>
                        <div className="cart-block__items">
                            {items.map(obj => (
                                <div key={obj.id} className="cart-block__item">
                                    <img className="item__photo" src={obj.imageUrl} alt="sneaker" />
                                    <div className="item__photo_content">
                                        <p className="item__photo_content-text">{obj.title}</p>
                                        <b>{obj.price} руб.</b>
                                    </div>
                                    <img onClick={() => onRemove(obj.id)} className="item__remove" src="/img/btn-remove.svg" alt="remove" />
                                </div>
                            ))}
                        </div>
                        <ul className="cart-block__total">
                            <li className="total__sum">
                                <span>Итог:</span>
                                <div></div>
                                <b>{totalPrice} руб.</b>
                            </li>
                            <li className="total__sum">
                                <span>Налог 13%:</span>
                                <div></div>
                                <b>{tax} руб.</b>
                            </li>
                        </ul>
                        <button disabled={isLoading} onClick={onClickOrder} className="total__button">
                            Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
                        </button>
                    </>
                ) : (
                    <Info
                        title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
                        description={
                            isOrderComplete
                                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке!`
                                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
                        }
                        image={isOrderComplete ? '/img/compltorder.jpg' : '/img/empty-cart.png'}
                    />
                )}
            </div>
        </div>
    );
}

export default Cart;
