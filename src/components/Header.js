function Header(props) {
	return (
        <header>
            <div className="headerLeft">
                <img className="shopLogo" alt="" src="/img/logo.png" />
                <div>
                    <h3 className="headerLeft__shopName">SneakerShop</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>

            <ul className="headerRight">
                <li onClick={props.onClickCart} className="headerRight__userList">
                    <img className="userList__iconCart" alt="cart" src="/img/cart.svg" />
                    <span className="userList__invoice">12500 руб.</span>
                </li>
                <li>
                    <img className="userList__iconProfile" alt="user" src="/img/user.svg" />
                </li>
            </ul>
        </header>
    );
}

export default Header;