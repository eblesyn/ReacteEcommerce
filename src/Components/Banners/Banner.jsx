import React from 'react'
import './Banner.css'
import belts from '../Assets/belts4.jpg'
import bag from '../Assets/bbag.png'
import sneaker from '../Assets/rshoe.png'
import { productData } from '../static/data'

const Banner = () => {
  return (
    <div>
      <div className="section">
      <div className="banner">
                <div className="text">
                <h2> Super Flash Sale <br /> 50% Off</h2>
                
                </div>
                <div className="grid">
                <div className="grid-class">
                    {
                        productData.map((i) => (
                            <div className="bg-class" key={i.id}>
                               <div>
                               <img src={i.image} alt="" className="img-banner" />
                               </div>
                               <div className="text-container">
                               <h3 className='btext'>{i.name }</h3>
                                    <h3 className='dprice'>{i.dprice}</h3>
                                    <h3 className='off'>{i.off}</h3>
                                    <h2 className='price'>{i.price}</h2>
                               </div>
                                
                            </div>
                        ))
                    }
                </div>
                </div>
            </div>
      </div>

    </div>
  )
}

export default Banner