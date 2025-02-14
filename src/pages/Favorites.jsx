import React from 'react';
import Card from '../components/Card';
import { AppContext } from '../App'

function Favorites({onAddToFavorite, onAddToCart}) {
	const {favorites} = React.useContext(AppContext);
    return (
        <div className="catalog">
            <div className="search-block">
                <h1>Избранное</h1>
            </div>

            <div className="sneakers">
                {favorites.map((item) => (
                    <Card
                        key={item.id}
                        onFavorite={onAddToFavorite}
                        onPlus={obj => onAddToCart(obj)}
                        favorited={true}
								{...item}
                    />
                ))}
            </div>
        </div>
    );
}

export default Favorites;
