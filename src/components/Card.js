function Card() {
	return (
        <div className="card">
            <div className="card__favorite">
                <img src="/img/like_off.svg" alt="like-off" />
            </div>

            <img className="card__item" src="/img/sneakers/1.jpg" alt="Sneakers" />
            <h3 className="card__name">Мужские Кроссовки Nike Blazer Mid Suede</h3>

            <div className="card__content">
                <div className="card__content-price">
                    <span>Цена:</span>
                    <b>12 500 руб.</b>
                </div>
                <button className="card__button">
                    <img className="card__button-icon" src="/img/plus.svg" alt="plus"></img>
                </button>
            </div>
        </div>
    );
}

export default Card;
