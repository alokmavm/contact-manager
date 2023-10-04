import React from 'react'
import './SignUp.css'
function SignUp() {
  return (
    <>
    <div className="signUp">SignUp</div>
    <div className="container">
       <div className="rectangle1">
        <div className='groupImg'>
          <img src="./Images/Group.png" alt="" />
        </div>
         <h3>LOGO</h3>
         <p>Create New Account</p>
         <form className='form'>
            <input type="text" placeholder='E-mail Id'/>
            <input type="password" placeholder='Password'/>
            <input type="password" placeholder='Confirm password'/>
            <input className='sign-up' type="text" placeholder='sign-Up' style={{background:"#7D8CC4"}}/>
            <div className='groupImg2'>
              <img src="./Images/Group.png" alt="" />
            </div>
        </form>
       </div>
    </div>
    </>
  )
}

export default SignUp