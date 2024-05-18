
import React from 'react'
import './Bestseller.css'
import { bestsellers } from '../static/data'
import Items from '../Items/Items'

const Bestseller = () => {
  return (
    <div className="div">
    <div className='container'>
      <div className="wrapper">
      <div className="b-text">
        <h3>BEST SELLER</h3>
        
        <div className="grid">
          <div className="col-4">
          <div className="bs-item">
        
        { bestsellers.map((items,i)=>{
          return <Items key={i} data={items} 
          />
        })}
       
       </div>
          </div>
        
        </div>
      </div>
      </div>
     
      </div> 
      </div>
  )
}

export default Bestseller