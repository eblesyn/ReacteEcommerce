


import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import ShopCategory from './Components/Pages/ShopCategory'
import Product from './Components/Pages/Product'
import Cart from './Components/Pages/Cart'
import LoginSignup from './Components/Pages/LoginSignup'
import Home from './Components/Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import bagbanner from './Components/Assets/bagbanner.jpg'
import shoebanner from './Components/Assets/shoebanner.jpg'
import beltbanner from './Components/Assets/bagbanner.jpg'





const App = () => {
  return (
    <div>
      <BrowserRouter>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='belts' element={<ShopCategory banner={beltbanner} category = "belt"/>}/>
        <Route path='sneakers' element={<ShopCategory banner={shoebanner} category = "sneakers"/>}/>
        <Route path='bags' element={<ShopCategory  banner={bagbanner} category = "bag"/>}/>
        <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
       </Route>
       <Route path='cart' element={<Cart/>}/>
       <Route path='/login' element={<LoginSignup/>}/>

      </Routes>
        <Footer/>

      </BrowserRouter>
    </div>
  )
}

export default App