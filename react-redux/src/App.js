import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import {  useSelector } from "react-redux";

function App() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return (
        <Fragment>
            <Header />
            {!isAuthenticated && <Auth />}
            {isAuthenticated && <Counter />}
        </Fragment>
    );
}

export default App;
