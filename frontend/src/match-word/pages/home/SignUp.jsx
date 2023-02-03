import React from 'react'
import './style.css'

function SignUp() {
  return (
    <div className='bg1'>
        <div className='main_login'>
            <div style={{display: 'flex'}}>
            <h1 className='text-logo' style={{marginLeft: 'auto', marginRight: '0'}}>Match</h1>
            <img src={require("../../assets/logo.png")} width='228px' height='228px' alt="" style={{marginRight: 'auto', marginLeft: '-80px', marginTop: '-120px'}} />
            </div>
            <form>
                <div style={{paddingRight: '4rem', paddingLeft: '4rem'}}>
                    <input type="text" className='mt-5' placeholder="User name" />
                </div>
                <div style={{paddingRight: '4rem', paddingLeft: '4rem'}}>
                    <input type="email" className='mt-5' placeholder="E-mail" />
                </div>
                <div style={{paddingRight: '4rem', paddingLeft: '4rem'}}>
                    <input type="password" className='mt-5' placeholder="Password" />
                </div>
                <div style={{marginTop: '6rem',paddingRight: '4rem', paddingLeft: '4rem', width: '100%', textAlign: 'center'}}>
                    <input type="submit" className='mt-5' value={'Create!'} style={{width: '17rem', height: '80px'}} />
                </div>
            </form>
        </div>

    </div>
  )
}

export default SignUp
