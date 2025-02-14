import React from 'react';



function Cart({ onClose, onRemove, items = [] }) {

	const totalPrice = items.reduce((sum, obj) => sum + obj.price, 0);
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
                                <span>Итого:</span>
                                <div></div>
                                <b>{totalPrice} руб.</b>
                            </li>
                            <li className="total__sum">
                                <span>Налог 13%:</span>
                                <div></div>
                                <b>{tax} руб.</b>
                            </li>
                        </ul>
                        <button className="total__button">
                            Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
                        </button>
                    </>
                ) : (
                    <div className="cart-block__empty">
                        <img className="cart-block__empty_logo" src="/img/empty-cart.png" alt="Empty" />
                        <h2>Корзина пустая</h2>
                        <p className="cart-block__empty_text">Добавьте хотя бы одну пару кроссовок что бы сделать заказ.</p>
                        <button onClick={onClose} className="total__button">
                            <img src="/img/arrow.svg" alt="Arrow" />
                            Вернуться назад
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;
