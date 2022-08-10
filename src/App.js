import classes from "./App.module.css";
import { Loading } from "./components/Loading";
import Nav from "./components/Nav";
import Category from "./pages/Category";
import Home from "./pages/Home";
import { useHttpClient } from "./hooks/http-hook";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

function App() {
  const { sendRequest } = useHttpClient();
  const {
    currentPage: page,
    cartOpen,
    wishlistOpen,
  } = useSelector((state) => state.nav);
  
  return (
    <div className={classes.App}>
      <Nav />
      {page === "home" && <Home />}
      {page === "login" && <Login />}
      {page === "category" && <Category />}
      {cartOpen && <Cart />}
      {wishlistOpen && <Wishlist />}
    </div>
  );
}

export default App;
