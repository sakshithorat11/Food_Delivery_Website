import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import Modal from '../Modal';
import Cart from '../screens/cart';
import {useCart, useDispatchcart } from './ContexReducer';

export default function Navbar() {



const [cartView,setCartView]=useState(false);
  let data = useCart();
const navigate=useNavigate();
const handleLogout=()=>
{
 localStorage.removeItem("authtoken");
 navigate("/login")
}


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active fs-5 " aria-current="page" to="/">Home</Link>
              </li>
              
              {
                (localStorage.getItem("authtoken"))?
                <li className="nav-item">
                <Link className="nav-link active fs-5 " aria-current="page" to="/MyOrders">My Order</Link>
                </li>
              :""}
              
              
              
              
              </ul>
              {
                (!localStorage.getItem("authtoken"))?
              <div className='d-flex'> 
              {/* <li className="nav-item">
                <Link className="nav-link" to="/Login">Login</Link>
              </li>
              <li className="nav-item">
               
                <Link className="nav-link" to="/createuser">Signup</Link>
              </li> */}
              <Link className="btn bg-white text-success mx-2" to="/createuser">Signup</Link>
              <Link className="btn bg-white text-success mx-2" to="/Login">Login</Link>
             </div>
           :
           <div>
            <div className="btn bg-white text-success mx-2" to="/createuser" onClick={()=>setCartView(true)}>MyCard {" "}
            <Badge pill bg='danger'>{data.length}</Badge>
            </div>

            {cartView?<Modal onClose={()=>setCartView(false)}> <Cart/>  </Modal>:""}
           <div className="btn bg-white text-danger mx-2" to="/"   onClick={handleLogout}>Logout</div>
           </div>



           }

          </div>
        </div>
      </nav>
    </div>

  )
}
 // mb means marging button
 // mf-means margin front
