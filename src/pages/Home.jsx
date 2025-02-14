import React from 'react';
import Card from '../components/Card';


function Home({ items, searchValue, setSearchValue, onChangeSearchInput, onRemoveItem, onAddToFavorite, onAddToCart, isLoading }) {
    
    const renderItems = () => {
        const filteredItems = items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));
        return (isLoading ? [...Array(12)] : filteredItems).map((item, index) => (
            <Card
                key={item ? item.id : index}
                onFavorite={obj => onAddToFavorite(obj)}
                onPlus={obj => onAddToCart(obj)}
                onRemove={obj => onRemoveItem(obj.id)}
                loading={isLoading}
                {...item}
            />
        ));
    };
    return (
        <div className="catalog">
            <div className="search-block">
                <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Каталог'}</h1>
                <div className="search-block__input">
                    <img onClick={() => setSearchValue('')} src="/img/search.svg" alt="search" />
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск ..." />
                </div>
            </div>

            <div className="sneakers">{renderItems()}</div>
        </div>
    );
}

export default Home;
