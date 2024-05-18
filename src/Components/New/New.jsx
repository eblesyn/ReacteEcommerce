import React from 'react'
import'./New.css'


const New = (data) => {
const {product} = data;
  return (
    <div className='news'>
<div className="new">
        HOME <i className="fa fa-angle-right" ></i> SHOP <i className="fa fa-angle-right" ></i> {product.category} <i className="fa fa-angle-right" ></i> {product.name}
</div>
 

    </div>
  )
}

export default New