import React from 'react';

function Basket(props) {
    const { cartItem, handleAdd, handleRemove } = props;
    const itemsPrice = cartItem.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.18;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (
        <aside className='block col-1'>
            <h3>Cart Item</h3>
            <div>
                {cartItem.length === 0 && <div>Cart Is empty!!!</div>}
                {cartItem.map((item) => (
                    <div key={item.id} className="row">
                        <div className="col-2">{item.title}</div>
                        <div className="col-2">
                            <button onClick={() => handleRemove(item)} className="remove">
                                -
                            </button>
                            {' '}
                            <button onClick={() => handleAdd(item)} className="add">
                                +
                            </button>
                        </div>
                        <div className="col-2 text-right">
                            {item.qty} * ${item.price}
                        </div>
                    </div>
                ))}


                {cartItem.length !== 0 && (
                    <div>
                        <hr></hr>
                        <div className="row">
                            <div className='col-2'>Item Price</div>
                            <div className='col-1 text-right'>${itemsPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className='col-2'>Tax Price</div>
                            <div className='col-1 text-right'>${taxPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className='col-2'>Shipping Price</div>
                            <div className='col-1 text-right'>${shippingPrice.toFixed(2)}</div>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col-2">
                                <strong>Total Price</strong>
                            </div>
                            <div className="col-1 text-right">
                                <strong>${totalPrice.toFixed(2)}</strong>
                            </div>
                            {''}
                        </div>
                    </div>
                )}
                <div className="row">
                    <button onClick={() => alert('Thank You for shopping')}>
                        Checkout
                    </button>
                </div>
            </div>
        </aside>
    );
}

export default Basket;