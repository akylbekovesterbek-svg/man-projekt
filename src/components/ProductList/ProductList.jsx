import React from 'react'
import pult from "../../assets/img/pult.png"
import koz from "../../assets/svg/koz.svg"
import lik from "../../assets/svg/lik.svg"
import jyldyz from "../../assets/svg/jyldyz.svg"
import './ProductList.scss'

function ProductList() {
    return (
        <div className='wrapper'>
            <div className='igor'>
                <div className='vep'>
                    <div><img style={{ width: "172px", height: "152px", }} src={pult} alt="" /></div>
                    <div className='at' style={{
                        width: "34", height: "76px", gap: "8px", display: "flex", flexDirection: "column"
                    }}>
                        <img style={{ width: "34px", height: "34px" }} src={koz} alt="" />
                        <img style={{ width: "34px", height: "34px" }} src={lik} alt="" />

                    </div>

                    <div className='button1' style={{ width: "56px", height: "26px", backgroundColor: "red", borderRadius: "4px", textAlign: "center", color: "#fff", border: "none" }}>-40%</div>

                   <button  className='button'>Add To Cart</button> 

                </div>
                <div className='vep1'>
                    
                    <h4>HAVIT HV-G92 Gamepad</h4>
                    <div className='mini'>
                        <p style={{color:"red"}}>$120</p>
                        <p style={{color:"rgba(0, 0, 0, 0.54)",textDecoration:"line-through"}}>$160</p>
                    </div>
                    <jyldyz style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <img src={jyldyz} alt="" />
                            <img src={jyldyz} alt="" />
                            <img src={jyldyz} alt="" />
                            <img src={jyldyz} alt="" />
                            <img src={jyldyz} alt="" />
                            <img src={jyldyz} alt="" />
                            </div>
                        <div> <p>(88)</p></div>
                    </jyldyz>


                </div>
            </div>
            
        </div>
    )
}

export default ProductList
