import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
import { uiActions } from "./store/ui-slice";

let isinitial = true;

function App() {
    const cartVisible = useSelector((state) => state.ui.cartVisible);
    const notification = useSelector((state) => state.ui.isNotification);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();


    useEffect(() => {



        const cartUpdateBackend = async () => {
            dispatch(uiActions.setNotification({ status: 'sending', message: 'sending request', title: 'sending' }))

            const url =
                "https://expensetracker-77f96-default-rtdb.asia-southeast1.firebasedatabase.app/redux/cart.json";

            const response = await fetch(url, {
                method: "put",
                body: JSON.stringify(cart),
            });

            if (!response.ok) throw new Error("Something went wrong");

            dispatch(uiActions.setNotification({ message: 'sucessfully sent request', title: 'sending', status: 'success' }))

        }

        if (isinitial) {
            isinitial = false;
            return;
        }
        cartUpdateBackend().catch(err => dispatch(uiActions.setNotification({ status: 'error', message: 'something went wrong', title: "Error!" })))

    }, [cart,dispatch]);

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
