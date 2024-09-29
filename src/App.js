
import './App.css';
import Home from './screens/Home';import './index.js';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from './screens/Signup';
import { CartProvider, cardProvider } from './components/ContexReducer';
import MyOrders from './screens/MyOrders';
function App() {
  return (
    
    <CartProvider>
  <Router>
      <div>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/createuser" element={<Signup/>}/>
      <Route exact path="/MyOrders" element={<MyOrders/>}/>
     {/* <Route exact path="/cart" element={<Cart/>}/> */}
      </Routes>
      </div>


  </Router>
  </CartProvider>
  );
}

export default App;
