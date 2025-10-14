import React from 'react'
import { Link } from 'react-router-dom';
import './Header.scss'
import poisk from '../../assets/svg/poisk.svg'
import wishlist from '../../assets/svg/wishlist.svg'
import arava from '../../assets/svg/arava.svg'




function Header() {
  

  return ( 
    <header className="header">
        
       <div className='header-top'>
<p style={{
    color:"#FAFAFA",
}}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!   <Link style={{color:"white"}}>ShopNow</Link></p>
<select style={{backgroundColor:"black",color:"#fff",border:"none"}} >
    <option value="kg">KGZ</option>
    <option value="kg">ENG</option>
    <option value="kg">RUS</option>
</select>
        </div> 
         <div className='nav'>
<div className='nav-left'>
    <Link to={"/"} style={{color:'black',fontSize:"24px",textDecoration:"none"}}>Exclusive</Link>
    <div>
    <ul className='text-01'>
        <li>
            <Link to={"/"}  style={{color:"black"}}>Home</Link>
        </li>
        <li>
            <Link to={"/contact"} style={{color:"black",textDecoration:"none"}}>Contact</Link>
        </li>
        <li>
            <Link to={"/about"}style={{color:"black",textDecoration:"none"}}>About</Link>
        </li>
        
        
        <li>
            <Link to={"/signUp"}style={{color:"black",textDecoration:"none"}}>Sign Up</Link>
        </li>
        
    </ul>
    </div>
</div>
<div className='nav-right'>
<div className='search'>
    <input className='text' type="text" placeholder='What are you looking for?'/>
    <img src={poisk} alt="" />
</div>
</div>

<div className='icons'>
    <div >  < Link to={"/wish"}><img src={wishlist} alt="" /></ Link > </div>
     <div><img src={arava} alt="" /></div> 

</div>


             </div>
      
      
    </header>
    
    
  );
}

export default Header;