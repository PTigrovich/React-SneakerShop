import React from 'react';
import ContentLoader from 'react-content-loader';
import { AppContext } from '../App';

function Card({ id, title, imageUrl, price, onFavorite, onPlus, favorited = false, loading = false, }) {
    const { isItemAdded } = React.useContext(AppContext);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickPlus = () => {
        onPlus({ id, title, imageUrl, price });
    };

    const onClickFavorite = () => {
        onFavorite({ id, title, imageUrl, price });
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="card">
            {loading ? (
                <ContentLoader speed={0} width={150} height={190} viewBox="0 0 150 190" backgroundColor="#f3f3f3" foregroundColor="#ecebeb" >
                    <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
                    <rect x="0" y="105" rx="5" ry="5" width="150" height="15" />
                    <rect x="0" y="125" rx="5" ry="5" width="95" height="15" />
                    <rect x="0" y="160" rx="8" ry="8" width="80" height="25" />
                    <rect x="117" y="153" rx="8" ry="8" width="32" height="32" />
                </ContentLoader>
            ) : (
                <>
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

                        <img 	className="card__button-icon" 
										src={isItemAdded(id) ? '/img/addedcart.svg' : '/img/plus.svg'} 
										alt="plus" onClick={onClickPlus}></img>
                    </div>
                </>
            )}
        </div>
    );
}
export default Card;
