import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useRouter} from 'next/router'

function SuccessPage() {

    const router = useRouter();
    const {session_id} = router.query
    const [order, setOrder] = useState(null)

    const confirm = async () => {
        try {
            const confirmedOrder = await axios.post("https://sliversmuse.herokuapp.com/api/orders/confirm", {checkout_session: session_id});
            if (confirmedOrder.status === 200) {
                setOrder(confirmedOrder)
            }
        } catch (err) {
            setOrder(err)
        }
    }

    useEffect(() => {
        if (session_id) {
            confirm()
        }
    }, [session_id]);


  return (
    <div className="d-flex flex-column align-items-center justify-content-around">

        {order && order.status === 200 && <>
        <div className="text header d-flex justify-content-center myfont">
            ORDER SUCCEEDED!
        </div>
        <div className="d-flex align-items-center logo-section justify-content-center">
            <img src='/Assets/logo_animated.gif' alt="logo" className="logo" />
            <div className="d-flex justify-content-center flex-column success-section align-self-center">
            <p className='myfont order-number'>Order #{order.data.id}</p>
            <p className='myfont success-message'>your beats will be sent to your email.<br/> <br/>
            please check your spam or junk folder if the email is not in your main inbox.<br/> <br/>
            If you don&#39;t receive an email within 24 hours, try refreshing this page or contact <a
                    href="mailto:talha23c@hotmail.com?subject=slivermuse"
                    className="header-link"
                    >SLIVERSMUSE</a></p>
            </div>
        </div>
      </>}
      {order && order.status !== 200 && <>
        <div className="text header d-flex justify-content-center myfont">
            ORDER FAILED!
        </div>
        <div className="d-flex align-items-center logo-section justify-content-center">
            <img loading="lazy" src='/Assets/logo_animated.gif' alt="logo" className="logo" />
            <div className="d-flex justify-content-center flex-column success-section align-self-center">
            <p className='myfont success-message'>There was an error during checkout!<br/> <br/>
            If you received your beats please ignore this message!<br/> <br/>
            If you&#39;ve been charged but have not received your beats, please try refreshing this page or contact <a
                    href="mailto:talha23c@hotmail.com?subject=slivermuse"
                    className="header-link"
                    >SLIVERSMUSE</a></p>
            </div>
        </div>
      </>}
    </div>
  )
}

export default SuccessPage