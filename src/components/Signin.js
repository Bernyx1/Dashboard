
import React from 'react'
import pic from '../images/iphone.png'
import '../index.css'

function Signin() {
  return (
    <div className='container p-3 my-3 mx-auto border bg-primary' >
         <div className='row bg-white m-2 rounded-lg' >
                <div className='col-8 '>
                    <div className='col-3 float-left' >
                        <img className='myImage' src={pic} alt='myimage'/>
                    </div>
                    <div className='col-3 float-right ' >
                      <form>
                        <div>
                            <h3>Hello,</h3>
                            <h3>Welcome back  </h3>
                        </div>

                        <div>
                          <input type='text' placeholder='Username or email '/> <br/><br/>
                          <input type='password' placeholder='Password'/>
                        </div>

                        <div className='row'>
                            <div className='col'>
                                <input type='checkbox' value='rememberme' checked />Remember Me
                            </div>
                            <div>
                              {/* change to link */}
                              <p><a href='#link'>Forgot Password?</a></p>
                            </div>
                        </div>

                         <button className='bg-primary text-white'>Login</button>
                      </form>
                    </div>
                </div>
         </div>
    </div>
  )
}

export default Signin
