import React, { useEffect, useState } from 'react'
import CartModal from '../CartModal'

const Beats = ({beats=[]}) => {

    const formatPrice = (price) => (price).toLocaleString('en-US', {style: 'currency', currency: 'CAD'}).replace('CA','')

    const [cart, setCart] = useState([]);

    const [modal, setModal] = useState(false);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (cart.length > 0) {
            setTotal(cart.reduce((a,b) => {
                const beatPrice = beats.find(c => c.id===b)
                return a+beatPrice.price
            }, 0))
        }
    }, [cart]);

    const toggleModal = () => {
        setModal(!modal);
    };

    useEffect(() => {
        if(modal) {
            document.body.classList.add('active-modal')
        } else {
            document.body.classList.remove('active-modal')
        }
    }, [modal]);

    return (
        <div className="d-flex flex-column align-items-center justify-content-around mb-5">
            <div className='d-flex align-items-center beats-header'>
                <div className="text header d-flex justify-content-center myfont mt-4">
                    BEATS
                </div>
                {cart.length > 0 && <>
                    <img className='cart-icon' src="/Assets/cart.svg" onClick={toggleModal}/>
                    <p className='myfont cart-counter'>{cart.length}</p>
                </>}
            </div>
            {modal && (
                <CartModal toggleModal={toggleModal} cart={cart} total={total} beats={beats} formatPrice={formatPrice} setCart={setCart} />
            )}
            <div className="text d-flex align-items-center beat-section">
                <div className="text d-flex justify-content-center flex-wrap">
                    {beats.map(beat => {
                        return <div className="d-flex justify-content-between flex-column beat align-items-center beat-item" key={beat.id}>
                            <div className='d-flex justify-content-between w-100'>
                                <p className='myfont beat-name'>{beat.name}</p>
                                <p className='myfont beat-price'> {formatPrice(beat.price)}</p>
                            </div>
                            <audio controls>
                                <source src={beat.mp3} type="audio/mpeg" />
                                This browser does not support the audio element. Please use a different browser
                            </audio>
                            <button 
                            className='myfont w-100 cart-button' 
                            onClick={() => {
                                if (!cart.includes(beat.id)){
                                    setCart([...cart, beat.id])
                                } else {
                                    const newCart = cart.filter((b) => {return b !== beat.id})
                                    setCart(newCart)
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