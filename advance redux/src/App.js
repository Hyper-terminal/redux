import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./store/cart-actions";
import { fetchCartData } from "./store/cart-actions";

let isinitial = true;

function App() {
    const cartVisible = useSelector((state) => state.ui.cartVisible);
    const notification = useSelector((state) => state.ui.isNotification);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    useEffect(() => {
        if (isinitial) {
            isinitial = false;
            return;
        }

        if (cart.changed) {
            dispatch(sendCartData(cart));
        }
    }, [cart, dispatch]);


    return (
        <>
            {notification && (
                <Notification
                    message={notification.message}
                    status={notification.status}
                    title={notification.title}
                />
            )}
            <Layout>
                {cartVisible && <Cart />}
                <Products />
            </Layout>
        </>
    );
}

export default App;
