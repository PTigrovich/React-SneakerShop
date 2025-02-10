import Card from './components/Card';
import Header from './components/Header';
import Cart from './components/Cart';
import React from 'react';



function App() {
	const [items, setItems] = React.useState([]);
	const [cartItems, setCartItems] = React.useState([]);
	const [cartOpened, setCartOpened] = React.useState(false);

	React.useEffect (() => {
		fetch('https://67aa241765ab088ea7e5ca00.mockapi.io/items')
            .then(Response => {
                return Response.json();
            })
            .then(json => {
                setItems(json);
            });
	}, []);

	const onAddToCart = (obj) => {
			setCartItems(prev => [...prev, obj]);
	}

  return (

      <div className="wrapper">
          {cartOpened ? <Cart items={cartItems} onClose= { () => setCartOpened(false)} /> : null}
          <Header onClickCart= { () => setCartOpened(true)} />
          <div className="catalog">
              <div className="search-block">
                  <h1>Каталог</h1>
                  <div className="search-block__input">
                      <img src="/img/search.svg" alt="search" />
                      <input placeholder="Поиск ..." />
                  </div>
              </div>

              <div className="sneakers">
                  {items.map(item => (
                      <Card
                          title={item.title}
                          price={item.price}
                          imageUrl={item.imageUrl}
                          onPlus={(obj) => onAddToCart(item)}
                          onFavorite={() => console.log('Добавили в закладки')}
                      />
                  ))}
              </div>
          </div>
      </div>
  );
}

export default App;
