import React from 'react'



function Card({id, title, imageUrl, price, onFavorite, onPlus, favorited=false }) {
    	const [isAdded, setIsAdded] = React.useState(false);
		const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickPlus = () => {
        onPlus({ id, title, imageUrl, price });
        setIsAdded (!isAdded);
    };

	 const onClickFavorite = () => {
			onFavorite({ id, title, imageUrl, price });
         setIsFavorite(!isFavorite);
     };

    return (
        <div className="card">
            <div className="card__favorite" onClick={onClickFavorite}>
                <img className="card__button-icon" src={isFavorite ? '/img/like_on.svg' : '/img/like_off.svg'} alt="like" />
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
