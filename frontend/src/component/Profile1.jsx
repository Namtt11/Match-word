import React from 'react'
import './style/styleProfile.css'

function Profile1() {
  return (
    <div className='bg2'>
      <div className='text-main'>
        <h1 className='text-center' style={{fontSize: '50px'}}>
        ชื่อผู้ใช้
        </h1>
      </div>
      <div className='rec-setting1'>
        <div style={{display: 'flex'}}>
          <img src={require('../assets/p.png')} width="103px" height="103px" style={{borderRadius: '25px'}} alt="" />
          <div className='' style={{display: 'flex', flexDirection: 'column', textAlign: 'left', marginLeft: '10px', marginTop: '6px', color: 'white', WebkitTextStroke: '2px black'}}>
              <h3 style={{fontSize: '45px'}}>User name</h3>
              <h6 style={{fontSize: '32px'}}>Point : 100</h6>
          </div>
        </div>
          
      </div>
      <div className='exit'>
        <div style={{display: 'flex'}}>
          <div className='me-5' style={{marginLeft: 'auto'}}>
              <img src={require('../assets/r1.png')} width="50px" height="50px" alt="" />
          </div>
          <div className='me-2'>
              <img src={require('../assets/r2.png')} width="50px" height="50px" alt="" />
          </div>
        </div>
      </div>
      <div className='main'>
        <div style={{display: 'flex'}}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <img src={require('../assets/p.png')} width="130px" height="130px" style={{borderRadius: '50%', borderStyle: 'solid', borderColor: '#507214', borderWidth: '6px'}} alt="" />
            <p className='text-center' style={{fontSize: '24px'}}>Edit</p>
          </div>
          <div style={{marginLeft: '5rem',width: '100%'}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <div style={{display: 'flex'}}>
                <label htmlFor="name" style={{fontSize: '36px'}}>Name:</label>
                <input className='input-form' type="text" id="name" name="name" />
              </div>
              <div style={{display: 'flex', marginTop: '2rem'}}>
                <label htmlFor="email" style={{fontSize: '36px', width: '150px'}}>E-mail:</label>
                <input className='input-form' type="email" id="email" name="email" />
              </div>
            </div>
          </div>
        </div>

      <div style={{marginLeft: '30%'}}>
        <label htmlFor="password" style={{fontSize: '36px', textAlign: 'left'}}>Password</label>
            <br />
            <input className='input-form' type="password" id="password" name="password" style={{width: '334px'}} />
      </div>

      <div style={{marginLeft: '30%'}}>
        <label htmlFor="password" style={{fontSize: '36px', textAlign: 'left'}}>Password**</label>
            <br />
            <input className='input-form' type="password" id="password" name="password" style={{width: '334px'}} />
      </div>

      <div className='text-center'>
        <button style={{width: '217px', height: '77px', fontSize: '36px', marginTop: '4rem', borderRadius: '11px', border: 'none', backgroundColor: '#FFCF66'}}>Done</button>
      </div>

      </div>
      <div className='menu'>
        <div className='menu-item'>
          <img src={require("../assets/m1.png")} width='75px' height='75px' alt="" />
          <p>คลัง</p>
        </div>
        <div className='menu-item'>
          <img src={require("../assets/m2.png")} width='75px' height='75px' alt="" />
          <p>ประวัติ</p>
        </div>
        <div className='menu-item'>
          <img src={require("../assets/m3.png")} width='75px' height='75px' alt="" />
          <p>ตั้งค่า</p>
        </div>
        <div className='menu-item'>
          <img src={require("../assets/m4.png")} width='75px' height='75px' alt="" />
          <p>ออกเกม</p>
        </div>
      </div>
    </div>
  )
}

export default Profile1
