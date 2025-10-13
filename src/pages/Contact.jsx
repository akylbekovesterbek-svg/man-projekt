import React from 'react'
import Banner from '../components/banner/Banner'
function Contact() {
  return (
<div>
<br />
<hr />
<br />
<br />

    <div style={{display:"flex", justifyContent:"space-start",gap:"124px"}}>
      <div>  <Banner/></div>

      <div style={{width:"371px",height:"326px",border:"none",marginTop:"180px",gap:"10px"}}>
<login style={{width:"345px", height:"78px",gap:"24px"}} >
  <h1 style={{fontSize:"36px"}}>Log in to Exclusive</h1>
  <br />
  <h5 style={{fontSize:"16px"}}>Enter your details below</h5>
  
</login>
<br />
<div  style={{width:"370px",height:"104px", display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center", }} >
<input style={{width:"100%",border:"none",borderBottom:"2px solid #ccc"}} type="text" placeholder='Email or Phone Number'  />
<br />
<input style={{width:"100%",border:"none",borderBottom:"2px solid #ccc",}} type="text" placeholder='Password' />

</div>
<br />
<br />
<br />

<div style={{
  width:"371px",height:"56px",display:"flex", justifyContent:"space-between",alignItems:"center", 
}}>
  <button style={{width:"143px",height:"56px",borderRadius:"4px",backgroundColor:"red",color:"#fff",border:"none"}} > Log In</button>
  
  <h4 style={{color:"#DB4444"}}>Forget Password?</h4>

</div>




      </div>
     
            
    </div>
    </div>
  )
}

export default Contact
