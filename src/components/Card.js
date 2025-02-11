import React from 'react'



function Card({ title, imageUrl, price, onFavorite, onPlus }) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        onPlus({ title, imageUrl, price });
        setIsAdded (!isAdded);
    };

    return (
        <div className="card">
            <div className="card__favorite" onClick={onFavorite}>
                <img src="/img/like_off.svg" alt="like-off" />
            </div>

            <img className="card__item" src={imageUrl} alt="Sneakers" />
            <h3 className="card__name">{title}</h3>

            <div className="card__content">
                <div className="card__content-price">
                    <span>Цена:</span>
                    <b>{price}</b>
                </div>

                <img className="card__button-icon" src={isAdded ? '/img/addedcart.svg' : '/img/plus.svg'} alt="plus" onClick={onClickPlus}></img>
            </div>
        </div>
    );
}
export default Card;
