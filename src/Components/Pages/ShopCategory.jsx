import React from 'react';
import '../CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import { useContext } from 'react';
import drop from '../Assets/drop.png'
import Items from '../Items/Items'
import { data } from '../Data/Info'
const ShopCategory = (props) => {

  const {data} =useContext(ShopContext);
 
  return (
    <div>
      
       <div className="shopcategory">
       <div className="shopbanner">
        <img src={props.banner} alt="" />
       </div>

   <div className="shopcategory-sort">
        Sort by <img src={drop} alt="" />
   </div>
  <div className="beg">
  <div className="shopcategory-product">
    {
      data.map((items,i)=>{
            if (props.category===items.category){
                return <Items key={i} data={items} 
                />}
                else{
                    return null;
                }
})
    }
   </div>
   <div className="shopcategory-load">
   <a href="shop">Load More</a>
   </div>

  </div>
   
       </div>




    </div>
  )
}

export default ShopCategory