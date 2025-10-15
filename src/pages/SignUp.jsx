import React from 'react'
import Banner from '../components/banner/Banner'
import '../components/banner/Banner.scss'
import mini from '../assets/svg/mini.svg'
function SignUp() {
  return (
    <div>
      <br />
<hr />
<br />
<br />
    <div className='wrapper' >
      
         <div> <Banner/></div>   
     
      <div style={{width:"371px", height:"530px", border:"none ",marginTop:"90px", }}>
        <div style={{width:"339", height:"78px",}}>
          <h1>Create an account</h1>
          <br />
          <p>Enter your details below</p>
        </div>
        <br />

        <div style={{width:"370px",height:"176px", display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center", }}>
          <input type="text" placeholder='Name' style={{width:"100%",border:"none",fontSize:"16px",borderBottom:"2px solid #ccc"}} />
          
          <input type="text" placeholder='Email or Phone Number'style={{width:"100%",border:"none",fontSize:"16px",borderBottom:"2px solid #ccc"}}/>
          
          
          <input type="text" placeholder='Password'style={{width:"100%",border:"none",fontSize:"16px",borderBottom:"2px solid #ccc"}}/>
        </div>
        
        <br />
        <br />
        <div  >
          <button style={{width:"100%", height:"56px",textAlign:"center", backgroundColor:"red",borderRadius:"4px" }}>Create Account</button>
          <br />
          <br />
          <google style={{width:"100%", height:"56px",textAlign:"center", border:"1px solid black",borderRadius:"4px", display:"flex", justifyContent:"center", alignItems:"center", gap:"10px", marginTop:"20px", cursor:"pointer"}}>
            <mini style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"10px",}}>
              <img src={mini} alt="" />
              <p>Sign up with Google</p>
            </mini>
          
          </google>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"10px", marginTop:"20px", cursor:"pointer",width:"100%", height:"56px",textAlign:"center", }}>
              
              <h4>Already have account? <a href="./login" style={{color:"black"}}>Log in</a></h4>
              
            </div>
        </div>
      </div>

    </div>
    </div>
  )
}

export default SignUp
