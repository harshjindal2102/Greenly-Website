import './App.css';
import {Route,Switch} from "react-router-dom";
import NavbarPage from "./components/Navbar";
import About from './components/About';
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import CartScreen from './components/CartScreen';
import Login from './components/Login';
import Signup from './components/Signup';
import ProfileScreen from "./components/ProfileScreen"
import ShippingScreen from './components/ShippingScreen';
import PaymentScreen from './components/PaymentScreen';
import LastScreen from './components/LastScreen';
import StoreScreen from './components/StoreScreen';
import Contact from './components/Contact';
//import About from "./components/About";

function App() {
  return (
    <>
      <NavbarPage />
      <Switch>
        <Route exact path = "/" ><Home /></Route>
        <Route exact path= "/about" ><About /></Route>
        <Route exact path= "/login" ><Login /></Route>
        <Route exact path= "/signup" ><Signup /></Route>
        <Route exact path= "/profile" ><ProfileScreen /></Route>
        <Route exact path ="/shipping" component={ShippingScreen} />
        <Route exact path ="/payment" component={PaymentScreen} />
        <Route exact path ="/finalgesture" component={LastScreen} />
        <Route exact path ="/store" component={StoreScreen} />
        <Route exact path ="/contact" component={Contact} />
      
        <Route exact path ="/api/products/:id" component ={ProductDetails} />
        <Route exact path="/cart/:id?" component={CartScreen} />
       
      </Switch>
    </>
  );
}

export default App;
