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
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51LGlgSSB5olwzdqLZtYp0a3UxoKB4N6IuAgGpILEq5ocTscdyOGlHhUpMIWQwYyvlRiRrJdyImyOZZLcZivhLSyM00R15wso2E"
);

function App() {
  const { sendRequest } = useHttpClient();
  const {
    currentPage: page,
    cartOpen,
    wishlistOpen,
  } = useSelector((state) => state.nav);

  return (
    <Elements stripe={stripePromise}>
      <div className={classes.App}>
        <Nav />
        {page === "home" && <Home />}
        {page === "login" && <Login />}
        {page === "category" && <Category />}
        {cartOpen && <Cart />}
        {wishlistOpen && <Wishlist />}
      </div>
    </Elements>
  );
}

export default App;
