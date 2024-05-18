import React from 'react'
import blue from '../Assets/bbshoe .png'
import './ShopNow.css'

const ShopNow = () => {
  return (
    <div>
        
        
        <div className="shop-display">
        <div className="shop">
                <div className="shop-left">
            <h4>Adidas Men Running <br />Sneakers</h4>
             <p>  Performance and design. Taken right to the edge. </p>               
               <div className="shope">
               <a href="shop" >SHOP NOW</a>
               </div>
              

               <hr />
                </div>

                <div className="shop-right">
                <img src={blue} alt="" />
                </div>
            </div>     
    </div>
            


    </div>
  )
}

export default ShopNow