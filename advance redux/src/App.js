import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
    const cartVisible = useSelector((state) => state.ui.cartVisible);

    return (
        <Layout>
            {cartVisible && <Cart />}
            <Products />
        </Layout>
    );
}

export default App;
