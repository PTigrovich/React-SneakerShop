import Card from './components/Card';
import Header from './components/Header';
import Cart from './components/Cart';

function App() {
  return (
      <div className="wrapper">
         <Cart />
         <Header />

          <div className="catalog">
              <div className="search-block">
                  <h1>Каталог</h1>
                  <div className="search-block__input">
                      <img src="/img/search.svg" alt="search" />
                      <input placeholder="Поиск ..." />
                  </div>
              </div>

              <div className="sneakers">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
              </div>
          </div>
      </div>
  );
}

export default App;
