import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import About from "../components/Pages/About/about";
import Profile from "../components/Pages/Profile/profile";
import OrdersPanel from "../components/Pages/OrdersPanel/ordersPanel";
import Home from "../components/Pages/Home/home";
import LogIn from "./Pages/LogIn/login";
import SignUp from "../components/Pages/LogIn/login";
import Settings from "../components/Pages/Settings/settings";
import Shop from "../components/Pages/Shop/shop";
import Payment from "../components/Pages/Payment/payment";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">profile</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/orders">
          <OrdersPanel />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/paymen">
          <Payment />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
