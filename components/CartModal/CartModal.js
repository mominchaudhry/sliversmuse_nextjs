import React, {useState} from 'react'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios';

function CartModal({toggleModal, cart, total, beats, formatPrice, setCart}) {

    const [checkout, setCheckout] = useState('CHECKOUT')

    const handleCheckout = async () => {
        setCheckout('LOADING...')
        window?.gtag("event", "begin_checkout", {
            currency: "CAD",
            value: total,
            items: cart.map((id) => ({
                item_id:id
            }))
          });
        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK)
        const res = await axios.post("https://sliversmuse.herokuapp.com/api/orders", {products:cart})
        const session = res.data;
        await stripe.redirectToCheckout({
            sessionId: session.id
        })
        setCheckout('CHECKOUT')
    }

  return (
    <div className="modal-cart">
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content2 myfont">
            {cart.length > 0 ?
            <>
                <h2 className='cart-label'>Cart</h2>
                <div className='d-flex cart-labels mb-3'>
                    <p className='mb-0'>BEAT</p>
                    <p className='mb-0'>PRICE</p>
                </div>
                {cart.map((b) => {
                    const beat = beats.find(i => i.id === b)
                    return (<div className='d-flex cart-beat' key={beat.id}>
                        <p>{beat.name}</p>
                        <div className='d-flex'>
                            <p>{formatPrice(beat.price)}</p>
                            <p className='remove' onClick={() => {
                                window?.gtag("event", "remove_from_cart", {
                                    currency: "CAD",
                                    value: beat.price,
                                    items: [
                                      {
                                        item_id: beat.id,
                                        item_name: beat.name,
                                        currency: "CAD",
                                        price: beat.price,
                                        quantity: 1
                                      }
                                    ]
                                  });
                                setCart(cart.filter(b => {
                                    {return b !== beat.id}
                                }))
                            }}>X</p>
                        </div>
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