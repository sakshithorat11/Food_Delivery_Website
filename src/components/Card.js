import React, { useEffect, useRef, useState } from 'react'
import {useDispatchcart,useCart} from './ContexReducer'





export default function Card(props){
let dispatch=useDispatchcart();
    let options = props.options;
    let priceOption = Object.keys(options);

    let data=useCart();
    const priceRef=useRef();
   let [qty,setQty]=useState(1)
   let [size,setSize]=useState("")
    const handlToCard = async() => {

        let food = []
        for (const item of data) {
          if (item.id === props.foodItem._id) {
            food = item;
    
            break;
          }
        }


        if (food !== []) {
            // if (food.size === size) {
            //   await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
            //   return
            // }
            //  else if (food.size !== size)
            // {
            //  await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name ,price:finalPrice,qty:qty,size:size})
            //  return;

            // }
            await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name ,price:finalPrice,qty:qty,size:size})
            console.log(data);
    }

    }


 let finalPrice=qty*parseInt(options[size]);
 useEffect(()=>{
     setSize(priceRef.current.value)
 },[])



    return (
       
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "170px", objectFit: "fill" }} />
                    <div className="card-body">
                        <h5 className="card-title">{props.foodItem.name}</h5>


                        <div className='container w-100' >
                            <select className='  m-3  h-100 bg-success rounded' onChange={(e)=> setQty(e.target.value)}>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })}
                            </select>
                            <select className='  m-3 h-100 bg-success rounded' ref={priceRef}onChange={(e)=> setSize(e.target.value)}>
                                {
                                    priceOption.map((data) => {

                                        return <option key={data} value={data} >
                                            {data}
                                        </option>
                                    })

                                }
                            </select>

                            <div className='d-inline h-100 fs-0'>
                            ₹{finalPrice}/-
                            </div>


                        </div>
                        <hr>
                        </hr>
                    <button className={"btn btn-success justfy-center ms-6"} onClick={handlToCard}>AddToCard</button>
                    </div>
                    
                </div>
                
            </div>
     
    )
}

