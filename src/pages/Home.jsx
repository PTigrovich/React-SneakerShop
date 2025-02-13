import Card from '../components/Card';

function Home({ items, searchValue, setSearchValue, onChangeSearchInput, onRemoveItem, onAddToFavorite, onAddToCart }) {
    return (
        <div className="catalog">
            <div className="search-block">
                <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Каталог'}</h1>
                <div className="search-block__input">
                    <img onClick={() => setSearchValue('')} src="/img/search.svg" alt="search" />
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск ..." />
                </div>
            </div>

            <div className="sneakers">
                {items
                    .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                    .map(item => (
                        <Card
                            key={item.id}
                            onFavorite={obj => onAddToFavorite(obj)}
                            onPlus={obj => onAddToCart(obj)}
                            onRemove={obj => onRemoveItem(obj.id)}
                            {...item}
                        />
                    ))}
            </div>
        </div>
    );
}

export default Home;
