import Card from './components/Card';
import Header from './components/Header';
import Cart from './components/Cart';
import React from 'react';
import axios from 'axios'


function App() {
	const [items, setItems] = React.useState([]);
	const [cartItems, setCartItems] = React.useState([]);
	const [searchValue, setSearchValue] = React.useState('');
	const [cartOpened, setCartOpened] = React.useState(false);

	React.useEffect (() => {
		// fetch('https://67aa241765ab088ea7e5ca00.mockapi.io/items')
      //       .then(Response => {
      //           return Response.json();
      //       })
      //       .then(json => {
      //           setItems(json);
      //       });

				axios.get('https://67aa241765ab088ea7e5ca00.mockapi.io/items').then((res) => {
					setItems(res.data);
				});
				axios.get('https://67aa241765ab088ea7e5ca00.mockapi.io/cart').then(res => {
               setCartItems(res.data);
            });
	},[]);

	const onAddToCart = obj => {
        axios.post('https://67aa241765ab088ea7e5ca00.mockapi.io/cart', obj).then(res => {
            setCartItems(prev => [...prev, res.data]);
        });
    };

	const onRemoveItem = (id) => {
      axios.delete(`https://67aa241765ab088ea7e5ca00.mockapi.io/cart/${id}`);
        	setCartItems((prev) => prev.filter(item => item.id !== id));
    };

	const onChangeSearchInput = (event) => {
			setSearchValue(event.target.value);
	};

  return (
      <div className="wrapper">
          {cartOpened && <Cart items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
          <Header onClickCart={() => setCartOpened(true)} />
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
                      .map((item, index) => (
                          <Card
                              key={index}
                              title={item.title}
                              price={item.price}
                              imageUrl={item.imageUrl}
                              onFavorite={() => console.log('Добавили в закладки')}
                              onPlus={obj => onAddToCart(obj)}
                          />
                      ))}
              </div>
          </div>
      </div>
  );
}

export default App;
