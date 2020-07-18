import React from 'react';
import '../index.css'



function Signin() {
  return (
    <div className='container bg-primary' className='col-12' >

         {/* <div className='col-4' className='float-left'>
         <img src= {pic}  alt='Logo'/>
         </div> */}
     

        <div className='col-8' className='mydiv'>
          <h2>Hello, Welcome back</h2>
        <input type='text'placeholder='Username or email' className='text-muted'/>
        <br/> <br/>
        <input type='password' placeholder='Password'/> <br/> <br/>
    
        <input type='checkbox'value='Remember Me'/> Remember Me
        {/* change to link soon */}
        <a href='' >Forgot Password?</a>
       
        <br/><br/>

        <button className="bg-primary" >Login</button>
        <p>Don't have an account? <a href='#'>Click here</a></p>
        <br/><br/>
        </div>

    </div>

  );
}

export default Signin;
