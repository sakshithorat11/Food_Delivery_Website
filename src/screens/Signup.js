

import React,{useState} from 'react'
import { Link } from 'react-router-dom'


export default function Signup() {
    const [credentials, setcredentials] = useState({name:"",email:"",password:"",geolocation:""})
    const handleSubmit= async(e)=>
    {
             e.preventDefault();
             console.log(JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.location}))
             const response= await fetch("http://localhost:5004/api/create",{
                method:'POST',
                headers:
                {
                     'Content-Type':'application/json'
                },
                body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.location})
             })
            //  .catch(err=>
            //  {
            //     console.log(err);
            //  })
             const json= await response.json();
             console.log(json)
             if(!json.success) 
             {
                alert("Enter the valid credentials");
             }
    }
    const onChange=(event)=>{
         setcredentials({...credentials,[event.target.name]:event.target.value})
    }


     

    return (
        <div>
            <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label" >Name</label>
                    <input type="text" className="form-control" name="name"value={credentials.name} onChange={onChange}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" value={credentials.email} onChange={onChange}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label" >Password</label>
                    <input type="password" className="form-control" name="password" id="exampleInputPassword1" value={credentials.password} onChange={onChange}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Geolocation</label>
                    <input type="text" className="form-control" name="location"id="location"  value={credentials.location} onChange={onChange}/>
                </div>

                <button type="submit" className="btn btn-success">Submit</button>
                <Link to="/login" className='m-3 btn btn-danger'>Already a User</Link>
            </form>
            </div>
        </div>
    )
}
