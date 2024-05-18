import React from 'react'
import '../CSS/Product.css'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import New from '../New/New';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import Description from '../Description/Description';
import RealtedProduct from '../RelatedProduct/RelatedProduct';

const Product = () => {
    const{data} =useContext (ShopContext);
    const { productId } =useParams();
    const product = data.find((e)=>e.id=== Number(productId));


  return (
    <div>

<New product={product}/>
<ProductDisplay product={product}/>
<Description product={product}/>
<RealtedProduct/>

    </div>
  )
}

export default Product