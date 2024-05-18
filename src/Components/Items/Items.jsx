import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Items = ({data}) => {
  return (
   <div className="item-section">
    <div className="item">
     <Link to={`/product/${data.id}`}>  <img onClick={window.scrollTo(0,0)} src={data.image} alt="" /> </Link> 
       <div className="items">
        <div className="item-name">
        <p>{data.name}</p>
      
      <div className="item-prices">
      <div className="item-price-new">
               {data.price}
       </div>
       <div className="item-price-old">
           {data.dprice}
       </div>
       <div className='item-price-off'>
           {data.off}
       </div>
      </div>
        </div>
       
       </div>
       
       </div>
   </div>
       
   
  )
}

export default Items