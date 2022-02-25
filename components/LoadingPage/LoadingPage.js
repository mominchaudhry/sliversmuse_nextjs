import React from 'react'

function LoadingPage() {
  return (
    <div className="app d-flex justify-content-center align-items-center flex-column">
        <img src='/Assets/logo_animated.gif' alt="logo" className="logo" />
        <p className='loading-text myfont'>Loading...</p>
    </div>
  )
}

export default LoadingPage