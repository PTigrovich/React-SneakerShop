import Card from '../components/Card';

function Favorites({ items, onAddToFavorite, onAddToCart,  }) {
    return (
        <div className="catalog">
            <div className="search-block">
                <h1>Избранное</h1>
            </div>

            <div className="sneakers">
                {items.map((item, index) => (
                    <Card
                        key={index}
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
