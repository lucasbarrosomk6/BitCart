import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import PageContainer from "./components/PageContainer";
import Dashboard from "./Pages/Dashboard";
import BuySell from "./Pages/BuySell";
import MyOrders from "./Pages/MyOrders";
import Settings from "./Pages/Settings";
import Support from "./Pages/Support";
import "./App.css";

const navOptions = [
  {
    name: "Dashboard",
    path: "/dashboard",
    selected: true,
  },
  {
    name: "Buy/Sell",
    path: "/buySell",
    selected: false,
  },
  {
    name: "My Orders",
    path: "/myOrders",
    selected: false,
  },
  {
    name: "Settings",
    path: "/settings",
    selected: false,
  },
  {
    name: "Support",
    path: "/support",
    selected: false,
  },
];

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/">
          <Nav navOptions={navOptions} />
        </Route>
        <PageContainer navOptions={navOptions}>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/buySell" component={BuySell} />
          <Route exact path="/myOrders" component={MyOrders} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/settings" component={Support} />
        </PageContainer>
      </Router>
    </div>
  );
}

export default App;
