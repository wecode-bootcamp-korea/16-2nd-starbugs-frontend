import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Login from "./Pages/Login/Login";
import Cart from "./Pages/Cart/Cart";
import ProductList from "./Pages/ProductList/ProductList";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import ScrollTop from "./ScrollTop";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <ScrollTop />
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/productlist" component={ProductList} />
          <Route exact path="/productdetail/:id" component={ProductDetail} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
