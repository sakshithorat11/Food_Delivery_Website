import { useState } from "react"
import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

export default function Login() {
  const [credentials, setcredentials] = useState({ email: "", password: "" })
  let navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ email: credentials.email, password: credentials.password }))
    const response = await fetch("http://localhost:5004/api/login", {
      method: 'POST',
      headers:
      {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    })
    //  .catch(err=>a
    //  {f
    //     console.log(err);
    //  })
    const json = await response.json();
    console.log(json)
    if (!json.success) {
      alert("Enter the valid credentials");
    }
    if (json.success) {
      localStorage.setItem("userEmail",credentials.email);
      localStorage.setItem("authtoken",json.authtoken);
      console.log(localStorage.getItem("authtoken"));
      navigate("/") 
    }
  }
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }


  return (
    <div>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" value={credentials.email} onChange={onChange} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label" >Password</label>
            <input type="password" className="form-control" name="password" id="exampleInputPassword1" value={credentials.password} onChange={onChange} />
          </div>

    

          <button type="submit" className="btn btn-success">Submit</button>
          <Link to="/createuser" className='m-3 btn btn-danger'>I am New a User</Link>
        </form>
      </div>
    </div>
  )
}
