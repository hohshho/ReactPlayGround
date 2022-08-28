import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
    const cartItems = (
        <ul className={classes['cart-items']}>
            {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
                <li>{item.name}</li>
            ))}
        </ul>
    );

    const closeHandler = () => {
        props.onShowCart();
    };

    const orderHandler = () => {
        props.onShowCart();
    };

    return (
        <Modal onShowCart={props.onShowCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={closeHandler}>
                    Close
                </button>
                <button className={classes.button} onClick={orderHandler}>
                    Order
                </button>
            </div>
        </Modal>
    );
};

export default Cart;
