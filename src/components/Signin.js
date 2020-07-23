
import React from 'react'
import pic from '../images/iphone.png'
import '../index.css'

function Signin() {
  return (
    <div className='container p-3 my-3 mx-auto border bg-primary' >
         <div className='row bg-white m-2 rounded-lg' >
                <div className='col-10 '>
                    <div className='col-4 float-left' >
                        <img className='myImage' src={pic} alt='myimage'/>
                    </div>
                    <div className='col-4 float-right ' >
                      <form>
                        <div>
                            <h3>Hello,</h3>
                            <h3>Welcome back  </h3>
                        </div>

                        <div>
                          <input type='text' placeholder='Username or email '/> <hr/><br/>
                          <input type='password' placeholder='Password'/><hr/>
                        </div> <br/>

                        <div className='row'>
                            <div className='col'>
                                <input type='checkbox' value='rememberme' checked /> Remember Me
                            </div>
                            <div>
                              {/* change to link */}
                              <p><a href='#link'>Forgot Password?</a></p>
                            </div>
                        </div>

                         <button type='button' className=' btn btn-primary btn-lg text-white loginbut'>Login</button>
                         <br/>   <br/>
                         {/* change to Link */}
                         <p>Don't have an account? <a href='#redirect'>Click here</a></p>

                          {/* <div className='row'>
                                <div className='col'>
                                      <button className='bg-primary text-white'><i className="far fa-play" ></i>App Store</button>
                                </div>

                                <div className='col'>
                                      <button className='bg-primary text-white'>Google Play</button>
                                </div>
                          </div>
                       */}
                       </form>
                    </div>
                </div>
         </div>
    </div>
  )
}

export default Signin
