import Header from './components/Header';
import Cart from './components/Cart';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';


export const AppContext = React.createContext({});

function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);
	 const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        // fetch('https://sneakershop.free.beeceptor.com/items')
        //       .then(Response => {
        //           return Response.json();
        //       })
        //       .then(json => {
        //           setItems(json);
        //       });

        async function fetchData() {
            setIsLoading(true);
            const cartResponse = await axios.get('https://67aa241765ab088ea7e5ca00.mockapi.io/cart');
            const favoritesResponse = await axios.get('https://67aa241765ab088ea7e5ca00.mockapi.io/cart'); //favorites
            const itemsResponse = await axios.get('https://67aa241765ab088ea7e5ca00.mockapi.io/items');
            setIsLoading(false);

            setCartItems(cartResponse.data);
            setFavorites(favoritesResponse.data);
            setItems(itemsResponse.data);
        }
        fetchData();
    }, []);

    const onAddToCart = obj => {
        try {
            if (cartItems.some(item => Number(item.id) === Number(obj.id))) {
                axios.delete(`https://67aa241765ab088ea7e5ca00.mockapi.io/cart/${obj.id}`);
                setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
            } else {
                axios.post('https://67aa241765ab088ea7e5ca00.mockapi.io/cart', obj).then(res => {
                    setCartItems(prev => [...prev, res.data]);
                });
            }
        } catch (error) {
            alert('Не удалось добавить в корзину');
        }
    };

    const onRemoveItem = id => {
        axios.delete(`https://67aa241765ab088ea7e5ca00.mockapi.io/cart/${id}`);
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const onAddToFavorite = async obj => {
        try {
            if (favorites.find(favObj => favObj.id === obj.id)) {
                axios.delete(`https://67aa241765ab088ea7e5ca00.mockapi.io/cart/${obj.id}`);//favorites
                setFavorites(prev => prev.filter(item => item.id !== obj.id));
            } else {
                const data = await axios.post('https://67aa241765ab088ea7e5ca00.mockapi.io/cart', obj); //favorites
                setFavorites(prev => [...prev, data.data]);
            }
        } catch (error) {
            alert('Не удалось добавить в Избранное');
        }
    };

    const onChangeSearchInput = event => {
        setSearchValue(event.target.value);
    };

	 const isItemAdded = (id) => {
		return cartItems.some((obj) => Number(obj.id) === Number(id));
	 }

    return (
        <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded }}>
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
                                cartItems={cartItems}
                                isLoading={isLoading}
                            />
                        }
                    />
                    <Route path="/favorites" element={<Favorites items={favorites} onAddToFavorite={onAddToFavorite} onAddToCart={onAddToCart} />} />
                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;
