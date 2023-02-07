import React from 'react'
import { Link } from 'react-router-dom'
import './style/style.css'


function Home() {
  return (
    <div className='bg1'>
        <div className='main_login'>
            <div style={{display: 'flex'}}>
            <h1 className='text-logo' style={{marginLeft: 'auto', marginRight: '0'}}>Match</h1>
            <img src={require("../assets/logo.png")} width='228px' height='228px' alt="" style={{marginRight: 'auto', marginLeft: '-80px', marginTop: '-120px'}} />
            </div>
            <form>
                <div style={{paddingRight: '4rem', paddingLeft: '4rem'}}>
                    <input type="text" className='mt-5' placeholder="User name" />
                </div>
                <div style={{paddingRight: '4rem', paddingLeft: '4rem'}}>
                    <input type="password" className='mt-5' placeholder="Password" />
                </div>
                <div style={{paddingRight: '4rem', paddingLeft: '4rem', width: '100%', textAlign: 'center'}}>
                    <input type="submit" className='mt-5' value={'Log in'} style={{width: '17rem', height: '80px'}} />
                </div>
            </form>
            <div className='mt-4'>
                <div className="separator" style={{marginRight: '15%', marginLeft: '15%'}}>    or    </div>
            </div>

            <div style={{display: 'flex'}}>
                <div style={{width: '50%', textAlign: 'center'}}>
                    <button className='mt-4 btn-login' style={{backgroundColor: 'white'}}><img src={require('../assets/google.png')} width="43px" height="43px" alt="" /></button>
                </div>
                <div style={{width: '50%', textAlign: 'center'}}>
                    <button className='mt-4 btn-login' style={{backgroundColor: '#3764B9'}}><img src={require('../assets/facebook.png')} width="43px" height="43px" alt="" /></button>
                </div>
            </div>

            <div style={{marginTop: '2rem'}} className="text-center">
                <h1 style={{color: 'black', fontSize: '32px', textDecoration: 'none'}} >Not register?</h1>
            </div>
            <div style={{marginTop: '2rem'}} className="text-center">
                <Link to={'/sign-up'} style={{color: 'white', fontSize: '32px', textDecoration: 'underline'}} >Sign Up!</Link>
            </div>
        </div>

    </div>
  )
}

export default Home
