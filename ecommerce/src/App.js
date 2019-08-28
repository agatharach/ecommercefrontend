import React from "react";
import "./App.css";
import "./App.css";
import { Provider } from "unistore/react";
import { store } from "./store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./component/Profile";
import InputBarang from "./pages/PostBarang";
import ShowBarang from "./pages/Category";
import ItemsDetail from "./pages/ItemsDetail";
import Carts from "./pages/Carts";
import Transaksi from "./pages/Transaksi";
import Invoice from "./pages/Invoice";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={SignIn} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/inputbarang" component={InputBarang} />
                    <Route exact path="/items" component={ShowBarang} />
                    <Route
                        exact
                        path="/items/list/:item_id"
                        component={ItemsDetail}
                    />
                    <Route exact path="/carts/:cart_id" component={Carts} />
                    <Route exact path="/checkout" component={Transaksi} />
                    <Route exact path="/checkout/:id" component={Invoice} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}
export default App;
