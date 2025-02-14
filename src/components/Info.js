import React from 'react';
import { AppContext } from '../App';


const Info = ({ title, image, description }) => {
	const { setCartOpened } = React.useContext(AppContext);
    return (
        <div>
            <div className="cart-block__empty">
                <img className="cart-block__empty_logo" src={image} alt="Empty" />
                <h2>{title}</h2>
                <p className="cart-block__empty_text">{description}</p>
                <button onClick={() => setCartOpened(false)} className="total__button">
                    <img src="/img/arrow.svg" alt="Arrow" />
                    Вернуться назад
                </button>
            </div>
        </div>
    );
};
export default Info;
