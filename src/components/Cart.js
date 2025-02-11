function Cart({ onClose, onRemove, items = [] }) {
    return (
        <div className="overlay">
            <div className="cart-block">
                <h2>
                    Корзина <img onClick={onClose} className="item__remove" src="/img/btn-remove.svg" alt="remove" />
                </h2>

					 

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
                        <b>28 250 руб.</b>
                    </li>
                    <li className="total__sum">
                        <span>Налог 13%:</span>
                        <div></div>
                        <b>3 250 руб.</b>
                    </li>
                </ul>
                <button className="total__button">
                    Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
                </button>
            </div>
        </div>
    );
}

export default Cart;
