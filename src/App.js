import React from "react";
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/Navibar";
import Home from "./pages/Home";
import About from "./pages/About";
import Notfound from "./pages/Notfound";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import Register from "./pages/Register";
import PrivateRoute from "./guard/auth";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/reducers/index";
import Cart from "./pages/Cart";

library.add(fab, fas);

const store = createStore(rootReducer);
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <PrivateRoute path="/about" component={About} />
          <Route path="/shop/:id" component={Shop}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route component={Notfound}></Route>
        </Switch>
        <Footer />

        {/* <Home/> */}
      </Router>
    </Provider>
  );
}

export default App;
