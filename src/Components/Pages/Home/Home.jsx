import Banner from "../../Banners/Banner"
import Bestseller from "../../BestSeller/Bestseller"
import Customer from "../../Customer/Customer"
import ShopNow from "../../ShopNow/ShopNow"

const Home = () => {
  return (
    <div>
       <Banner/>
       <Bestseller/>
       <ShopNow/>
       <Customer/>
       
    </div>
  )
}

export default Home