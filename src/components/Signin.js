
import React from 'react'
import pic from '../images/iphone.png'
import '../index.css'

function Signin() {
  return (
    <div className='container p-3 my-3 mx-auto border bg-primary' >
         <div className='row bg-white m-2 rounded-lg' >
                <div className='col-7 0ffset-2'>
                    <div className='col-2 float-left' >
                        <img className='myImage' src={pic} alt='myimage'/>
                    </div>
                    <div className='col-1 float-right ' >
                      <form>
                        <div>
                            <h3>Hello,</h3>
                            <h3>Welcome  </h3>
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
