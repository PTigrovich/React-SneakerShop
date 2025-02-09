function Cart() {
	return (
        <div style={{ display: 'none' }} className="overlay">
            <div className="cart-block">
                <h2>
                    Корзина <img className="item__remove" src="/img/btn-remove.svg" alt="remove" />
                </h2>

                <div class="cart-block__items">
                    <div className="cart-block__item">
                        <img className="item__photo" src="/img/sneakers/1.jpg" alt="sneaker" />
                        <div className="item__photo_content">
                            <p className="item__photo_content-text">Мужские Кроссовки Nike Blazer Mid Suede</p>
                            <b>12 500руб.</b>
                        </div>
                        <img className="item__remove" src="/img/btn-remove.svg" alt="remove" />
                    </div>

                    <div className="cart-block__item">
                        <img className="item__photo" src="/img/sneakers/2.jpg" alt="sneaker" />
                        <div className="item__photo_content">
                            <p className="item__photo_content-text">Мужские Кроссовки Nike Blazer Mid Suede</p>
                            <b>12 500руб.</b>
                        </div>
                        <img className="item__remove" src="/img/btn-remove.svg" alt="remove" />
                    </div>
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