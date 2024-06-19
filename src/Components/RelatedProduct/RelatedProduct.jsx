
import "./RelatedProduct.css"

import React from 'react'
import { data } from '../Data/Info'
import Items from '../Items/Items'


const RealtedProduct = () => {
  return (
    <div>
<div className="relatedpd">
  <h1>Related Products</h1>
  <hr />
</div>
<div className="relateditem">
  {
   data.map((items,i)=>{
      return <Items key={i} data={items}  />
})  }
</div>
    </div>
  )
}

export default RealtedProduct