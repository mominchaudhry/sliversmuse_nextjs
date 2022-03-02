import React, {useState} from 'react'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios';

function CartModal({toggleModal, cart, total, beats, formatPrice}) {

    const [checkout, setCheckout] = useState('CHECKOUT')

    const handleCheckout = async () => {
        setCheckout('LOADING...')
        console.log(process.env.NEXT_PUBLIC_STRIPE_PK)
        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK)
        const res = await axios.post("https://sliversmuse.herokuapp.com/api/orders", {products:cart})
        const session = res.data;
        await stripe.redirectToCheckout({
            sessionId: session.id
        })
    }

  return (
    <div className="modal-cart">
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content2 myfont">
            {cart.length > 0 ?
            <>
                <h2 className='align-self-center'>Cart</h2>
                <div className='d-flex cart-labels mb-3'>
                    <p className='mb-0'>BEAT</p>
                    <p className='mb-0'>PRICE</p>
                </div>
                {cart.map((b) => {
                    const beat = beats.find(i => i.id === b)
                    return (<div className='d-flex cart-beat' key={beat.id}>
                        <p>{beat.name}</p>
                        <p>{formatPrice(beat.price)}</p>
                    </div>)
                })}
                <div className='d-flex cart-total pt-3'>
                    <p className=''>TOTAL</p>
                    <p className=''>{formatPrice(total)}</p>
                </div>
                <p>All beats will be sent as .WAV files to the email entered upon checkout</p>
                <button className="checkout-button" onClick={handleCheckout}>{checkout}</button>
            </> : 
            <p className='loading-text'>Cart is empty!</p>}
            <button className="close-modal" onClick={toggleModal}>
            CLOSE
            </button>
        </div>
    </div>
  )
}

export default CartModal