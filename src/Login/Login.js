import React from 'react'
import "./Login.css"
function Login() {
  return (
    <>
     <div className="tag">Login</div>
     <div className="container">
       <div className="rectangle1">
        <div className='groupImg'>
          <img src="./Images/Group.png" alt="" />
        </div>
         <h3>LOGO</h3>
         <p>Enter your credentials to access your account</p>
         <form className='form'>
            <input className='userId' type="text" placeholder='User Id'/>
            <input className='password' type="password" placeholder='Password'/>
            <input className='sign-in' type="text" placeholder='sign-In' style={{background:"#7D8CC4"}}/>
            <div >sign up</div>
            <div className='groupImg1'>
                <img src="./Images/Group.png" alt="" />
             </div>
         </form>
       </div>
    </div>
    </>
  )
}
export default Login