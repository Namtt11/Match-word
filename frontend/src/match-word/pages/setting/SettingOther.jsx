import React from 'react'
import './styleSetting.css'

function SettingOther() {
  return (
    <div className='bg2'>
      <div className='rec-setting'>
        <h3 style={{color: 'white'}}>
          Setting
        </h3>
      </div>
      <div className='exit'>
        <h3 style={{color: 'black', fontSize: '50px'}}>
          X
        </h3>
      </div>
      <div className='main'>
        <div className='div-nav'>
          <div style={{width: '100%', backgroundColor: '#F7E6F0', paddingTop: '10px', borderRadius: '47px 0 0 47px'}}>
            <h3>ทั่วไป</h3>
          </div>
          <div style={{width: '100%', backgroundColor: '#000', paddingTop: '10px'}}>
              <h3 style={{color: 'white'}}>อื่นๆ</h3>
          </div>
        </div>

        <div className='div-content'>
          <div style={{marginRight: 'auto'}}>
            <h2>พื้นหลัง</h2>
          </div>
          <div style={{marginLeft: 'auto'}}>
            <img src={require('../../assets/write.png')} width="50px" height="50px" alt="" />
          </div>
        </div>

        <div className='div-content' style={{marginBottom: '10rem'}}>
          <div style={{marginRight: 'auto'}}>
            <h2>ภาษา</h2>
          </div>
          <div style={{marginLeft: 'auto'}}>
            <img src={require('../../assets/write.png')} width="50px" height="50px" alt="" />
          </div>
        </div>


      </div>
      <div className='menu'>
        <div className='menu-item'>
          <img src={require("../../assets/m1.png")} width='75px' height='75px' alt="" />
          <p>คลัง</p>
        </div>
        <div className='menu-item'>
          <img src={require("../../assets/m2.png")} width='75px' height='75px' alt="" />
          <p>ประวัติ</p>
        </div>
        <div className='menu-item'>
          <img src={require("../../assets/m3.png")} width='75px' height='75px' alt="" />
          <p>ตั้งค่า</p>
        </div>
        <div className='menu-item'>
          <img src={require("../../assets/m4.png")} width='75px' height='75px' alt="" />
          <p>ออกเกม</p>
        </div>
      </div>
    </div>
  )
}

export default SettingOther