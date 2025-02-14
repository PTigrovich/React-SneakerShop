import { Link } from 'react-router-dom';
import React from 'react';
import { AppContext } from '../App';

function Header(props) {
	const {cartItems} = React.useContext(AppContext);
	const totalPrice = cartItems.reduce((sum, obj) => sum + obj.price, 0);
    return (
        <header>
            <Link to="/">
                <div className="headerLeft">
                    <img className="shopLogo" alt="" src="/img/logo.png" />
                    <div>
                        <h3 className="headerLeft__shopName">SneakerShop</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>

            <ul className="headerRight">
                <li onClick={props.onClickCart} className="headerRight__userList">
                    <img className="userList__iconCart" alt="cart" src="/img/cart.svg" />
                    <span className="userList__invoice">{totalPrice} руб.</span>
                </li>
                <li>
                    <Link to="/favorites">
                        <img className="userList__iconProfile" alt="favor" src="/img/heart.svg" />
                    </Link>
                </li>
                <li>
                    <img className="userList__iconProfile" alt="user" src="/img/user.svg" />
                </li>
            </ul>
        </header>
    );
}

export default Header;
