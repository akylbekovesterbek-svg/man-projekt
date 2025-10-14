import React from 'react'
import sumka from "../assets/img/sumka.png"
import delat from "../assets/svg/delat.svg"
import araba from "../assets/svg/araba.svg"
import jyldyz from "../assets/svg/jyldyz.svg"
import "./Wishlist.scss"
function Wishlist() {
  return (
    <div className='klass'>
    <div className='igor'>
                    <div className='vep'>
                        <div><img style={{ width: "172px", height: "152px", }} src={sumka} alt="" /></div>
                        <div className='at' style={{
                            width: "34", height: "76px", gap: "8px", display: "flex", flexDirection: "column"
                        }}>
                            <img style={{ width: "34px", height: "34px" }} src={delat} alt="" />
                            
    
                        </div>
    
                        <div className='button1' style={{ width: "56px", height: "26px", backgroundColor: "red", borderRadius: "4px", textAlign: "center", color: "#fff", border: "none" }}>-35%</div>
    
                       <button  className='button'>
                        <img src={araba} alt="" />
                        Add To Cart</button> 
    
                    </div>
                    <div className='vep1'>
                        
                        <h5>Gucci duffle bag</h5>
                        <div className='mini'>
                            <p style={{color:"red"}}>$960</p>
                            <p style={{color:"rgba(0, 0, 0, 0.54)",textDecoration:"line-through"}}>$1160</p>
                        </div>
                        
    
    
                    </div>
                </div>,
    </div>
  )
}

export default Wishlist
