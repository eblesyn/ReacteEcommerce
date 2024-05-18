import React from 'react'
import './Description.css'
const Description = (data) => {
    const {product} =data;

    
  return (
    <div>
        <div className="description">
            <div className="description-navigate">
                <div className="description-navbox">
                    Description
                    <div className="description-navbox fade">
                    Reviews (122)
                </div>
                </div>
                
                <div className="description-description">
                {product.dec}
                </div>
            </div>
        </div>

    </div>
  )
}

export default Description