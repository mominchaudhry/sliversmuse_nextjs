import React from 'react'

function SuccessPage() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-around">
      <div className="text header d-flex justify-content-center myfont">
        ORDER SUCCEEDED!
      </div>
      <div className="d-flex align-items-center logo-section justify-content-center">
        <img loading="lazy" src='/Assets/logo_animated.gif' alt="logo" className="logo" />
        <div className="d-flex justify-content-center flex-column success-section align-self-center">
          <p className='myfont success-message'>your recipt and beats will be sent to your email, 
          please check your spam or junk folder if the email is not in your main inbox. 
          If you don't receive an email within 24 hours, please contact <a
                href="mailto:talha23c@hotmail.com?subject=slivermuse"
                className="header-link"
                >SLIVERSMUSE</a></p>
        </div>
      </div>
    </div>
  )
}

export default SuccessPage