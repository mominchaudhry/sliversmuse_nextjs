import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Beats = ({beats=[]}) => {

    const formatPrice = (price) => (price).toLocaleString('en-US', {style: 'currency', currency: 'CAD'}).replace('CA','')

    const [cart, setCart] = useState([]);

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    useEffect(() => {
        if(modal) {
            document.body.classList.add('active-modal')
        } else {
            document.body.classList.remove('active-modal')
        }
    }, [modal])

    return (
        <div className="d-flex flex-column align-items-center justify-content-around mb-5">
            <div className='d-flex align-items-center'>
                <div className="text header d-flex justify-content-center myfont mt-4">
                    BEATS
                </div>
                <img className='cart-icon' src="/Assets/cart.svg" onClick={toggleModal}/>
                {cart.length > 0 && <p className='myfont cart-counter'>{cart.length}</p>}
            </div>
            {modal && (
                <div className="modal-cart">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content2 myfont">
                        {cart.length > 0 ?
                        <>
                            <h2>Cart</h2>
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
                            <button className="checkout-button" onClick={() => {
                                axios.post("https://sliversmuse.herokuapp.com/api/orders", {products:cart})
                            }}>CHECKOUT</button>
                        </> : 
                        <p className='loading-text'>Cart is empty!</p>}
                        <button className="close-modal" onClick={toggleModal}>
                        CLOSE
                        </button>
                    </div>
                </div>
            )}
            <div className="text d-flex align-items-center beat-section">
                <div className="text d-flex justify-content-center flex-wrap">
                    {beats.map(beat => {
                        return <div className="d-flex justify-content-between flex-column beat align-items-center beat-item" key={beat.id}>
                            <div className='d-flex w-100'>
                                <p className='myfont beat-name'>{beat.name}</p>
                                <p className='myfont beat-price'> {formatPrice(beat.price)}</p>
                            </div>
                            <audio controls>
                                <source src={beat.mp3} type="audio/mpeg" />
                                This browser does not support the audio element. Please use a different browser
                            </audio>
                            <button 
                            className='myfont w-100' 
                            onClick={() => {
                                if (!cart.includes(beat.id)){
                                    setCart([...cart, beat.id])
                                } else {
                                    console.log(cart)
                                    const newCart = cart.filter((b) => {return b !== beat.id})
                                    setCart(newCart)
                                    console.log(newCart, 'cart 2')
                                }
                            }}>
                                { cart.includes(beat.id) ? <div>
                                    <img className='checkmark' src='/Assets/checkmark.svg'/>
                                    REMOVE FROM CART
                                </div> : "ADD TO CART"}
                            </button>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Beats;