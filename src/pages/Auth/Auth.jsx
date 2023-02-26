import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
const Auth = () => {
  return (
    <div className='auth'>
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="webname">
                <h1>We Me</h1>
                <h6>Explore the ideas and thoughts</h6>
            </div>
        </div>

        <SignUp/>
    </div>
  )
}

function SignUp() {
    return(
        <div className="a-right">
            <form className='infoForm'>

                <h3>SignUp</h3>
                <div>
                    <input type="text" placeholder='First Name' className='infoInput' name='firstName'/>
                </div>
            </form>
        </div>
    )
}

export default Auth