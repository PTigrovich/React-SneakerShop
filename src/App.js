import Header from './components/Header';
import Cart from './components/Cart';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        // fetch('https://sneakershop.free.beeceptor.com/items')
        //       .then(Response => {
        //           return Response.json();
        //       })
        //       .then(json => {
        //           setItems(json);
        //       });

        axios.get('https://sneakershop.free.beeceptor.com/items').then(res => {
            setItems(res.data);
        });

        axios.get('https://sneakershop.free.beeceptor.com/cart').then(res => {
            setCartItems(res.data);
        });
        axios.get('https://sneakershop.free.beeceptor.com/favorite').then(res => {
            setFavorites(res.data);
        });
    }, []);

    const onAddToCart = obj => {
        try {
            if (cartItems.find(item => Number(item.id) === Number(obj.id))) {
                axios.delete(`https://sneakershop.free.beeceptor.com/cart/${obj.id}`);
                setCartItems(prev => prev.filter(item => Number(item.id) !== Number(item.id)));
            } else {
                axios.post('https://sneakershop.free.beeceptor.com/cart', obj).then(res => {
                    setCartItems(prev => [...prev, res.data]);
                });
            }
        } catch (error) {
            alert('Не удалось добавить в корзину');
        }
    };

    const onRemoveItem = id => {
        axios.delete(`https://sneakershop.free.beeceptor.com/cart/${id}`);
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const onAddToFavorite = async obj => {
        try {
            if (favorites.find(favObj => favObj.id === obj.id)) {
                axios.delete(`https://sneakershop.free.beeceptor.com/favorite/${obj.id}`);
                setFavorites(prev => prev.filter(item => item.id !== obj.id));
            } else {
                const data = await 
					 axios.post('https://sneakershop.free.beeceptor.com/favorite', obj);
                setFavorites(prev => [...prev, data.data]);
            }
        } catch (error) {
            alert('Не удалось добавить в Избранное');
        }
    };

    const onChangeSearchInput = event => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="wrapper">
            {cartOpened && <Cart items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
            <Header onClickCart={() => setCartOpened(true)} />

            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            items={items}
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            onChangeSearchInput={onChangeSearchInput}
                            onAddToFavorite={onAddToFavorite}
                            onAddToCart={onAddToCart}
                            onRemoveItem={onRemoveItem}
                        />
                    }
                />
                <Route path="/favorites" element={<Favorites items={favorites} onAddToFavorite={onAddToFavorite} onAddToCart={onAddToCart} />} />
            </Routes>
        </div>
    );
}

export default App;
