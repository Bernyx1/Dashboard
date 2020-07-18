import React from 'react';
import pic from '../images/flower.jpg'



function Signin() {
  return (
    <div className='container bg-primary' className='col-12' >

        <div className='row mx-auto p-4 bg-white' >
         <div className='col-4' className='float-left'>
         <img src= {pic}  alt='Logo'/>
         </div>
     

        <div className='col-4' >
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

    </div>
  );
}

export default Signin;
