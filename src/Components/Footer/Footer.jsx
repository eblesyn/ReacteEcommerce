import React from 'react'
import './Footer.css'
import { footer_1 } from '../static/data'
import { footer_2 } from '../static/data'
import west from '../Assets/Wu.png'
import master from '../Assets/Mc.png'
import visa from '../Assets/VC.png'
import pay from '../Assets/Paypal.png'

const Footer = () => {
  return (
    <div>
        <div className="containers">
        <div className="footer">

{
    footer_1.map((i)=>(
        <div className="footer1"  key={i.id}>
            <div className="pic">
                
            </div>
            <div className="name">
            <h6>{i.name} </h6>
            </div>
            <div className="details">
                <p>{i.details}</p>
                <i className='fa fa-facebook'></i>
            </div>
           
        </div>
    ))
}

</div>
<div className="footer2">

{
    footer_2.map((i)=>(
        <div className="two" key={i.id}>
            <div className="name">
                <h6>{i.name}</h6>
            </div>
            <div className="details">
                <p>{i.details}</p>
            </div>
        </div>
    ))
}
</div>
<div className="hr">
<hr />
</div>

<div className="card">
    <div className="copy">
        <small> © 2018 Ecommerce theme by www.bisenbaev.com</small>
    </div>
    <div className="cards">
<div className="PICS">
    <img src={west} alt="" />
    <img src={master} alt="" />
    <img src={pay} alt="" />
    <img src={visa} alt="" />
</div>
    </div>
</div>
        </div>
        
       
    </div>

  )
}

export default Footer