import React from 'react'
import './Customer.css'
import { customer } from '../static/data'
import { latest } from '../static/data'
import blueshoe from "../Assets/blueshoe.png"

const Customer = () => {
  return (
    <div>

<div className="row">
    

        {
            customer.map((i) =>(
            <div className="col-3" key={i.id}>
            <div className="image">
              <img src={i.image} alt=""  / >
                               </div>
                               <div className="name">
                                <h4>{i.name}</h4>
                               </div>
                               <div className="details">
                                <p>{i.details}</p>
                               </div>
</div>


            ))
        }
    
</div>
<div className="latest">
<h3>LATEST NEWS</h3>
    <div className="rows">
{
        latest.map((i)=>(
<div className="colpics" key={i.id}>
<div className="pics">
    <img src={i.image} alt="" />
</div>
<div className="flex">
<small> {i.date} </small>
   <h3> {i.name} </h3>
    
   <p>   {i.details} </p>
 

</div>
</div>


        ))
    }
    </div>
    
    
</div>

<div className="featured">
<h3>FEATURED PRODUCTS</h3>
    <div className="row">
        <div className="colpics">
        <div className='pic'>
            <img src={ blueshoe} alt="" />
            </div>
            <div className="flex">
                <h4>Blue Swade Nike Sneakers</h4>
                <div className="red">
                    <p>$299 <span>$590</span> </p>
                </div>
            </div>
        </div>
        <div className="colpics">
            <div className='pic'>
            <img src={ blueshoe} alt="" />
            </div>
            
            <div className="flex">
                <h4>Blue Swade Nike Sneakers</h4>
                <div className="red">
                    <p>$299 <span>$590</span> </p>
                </div>
            </div>
        </div>
        <div className="colpics">
        <div className='pic'>
            <img src={ blueshoe} alt="" />
            </div>
            <div className="flex">
                <h4>Blue Swade Nike Sneakers</h4>
                <div className="red">
                    <p>$299 <span>$590</span> </p>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="input">
     <input type="text" placeholder='Search query...' /> <button>Search</button>
</div>

    </div>

    
  )
}

export default Customer