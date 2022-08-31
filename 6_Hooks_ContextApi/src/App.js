import React, { useState } from 'react';
import Cart from './Components/Cart/Cart';

import Header from './Components/Layout/Header/Header';
import Meals from './Components/Meals/Meals';
import CartProvider from './Components/store/CartProvider';

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const ShowCartHandler = () => {
        setCartIsShown((prevCartIsShown) => {
            return !prevCartIsShown;
        });
    };

    return (
        <CartProvider>
            {cartIsShown && <Cart onShowCart={ShowCartHandler} />}
            <Header onShowCart={ShowCartHandler}></Header>
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;
