import React from 'react';
// import './App.css';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Navbar from './components/Navibar';
import Home from './pages/Home';
import About from './pages/About';
import Notfound from './pages/Notfound';
import Footer from './components/Footer';
import Shop from './pages/Shop';
import Register from './pages/Register';



library.add(fab,fas)


function App() {
  return (
    <>
<Router>
  <Navbar/>
  <Switch>
    <Route exact path="/" component={Home}></Route>
  <Route path="/about" component={About}></Route>
  <Route  path="/shop/:id" component={Shop}></Route>
  <Route  path="/register" component={Register}></Route>

  <Route component={Notfound}></Route>
  </Switch>
  <Footer/>
  
  {/* <Home/> */}
 </Router>
  </> 
  );
}

export default App;
