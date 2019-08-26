import React from "react";
import "./App.css";
import "./App.css";
import { Provider } from "unistore/react";
import { store } from "./store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import InputBarang from "./pages/PostBarang";
import Category from "./pages/Category";
// import Anime from "./page/Anime";
// import AnimeKategori from "./page/AnimeKategori";
// import Manga from "./page/Manga";
// import MangaKategori from "./page/MangaKategori";
// import NotFound from "./page/NotFound";
// import Book from "./page/Book";
// import ShowBarang from "./page/Lapak";

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
                    <Route exact path="/items" component={Category} />
                    {/* <Route exact path="/anime" component={Anime} />
                    <Route path="/anime/:genre" component={AnimeKategori} />
                    <Route path="/books" component={Book} />
                    <Route exact path="/show" component={ShowBarang} />
                    <Route path="/manga/:genre" component={MangaKategori} />
                    <Route component={NotFound} /> */}{" "}
                    */}
                </Switch>{" "}
                */}
            </BrowserRouter>
        </Provider>
    );
}
export default App;
