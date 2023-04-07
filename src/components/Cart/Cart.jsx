import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some products</p>
    }else{
        message = <p>Thanks for wasting money</p>
    }
    return (
        <div>
            <h2>Order Summary: {cart.length}</h2>
            {message}
            {
            cart.map(tshirt =><p key={tshirt._id}>{tshirt.name} <button onClick={()=> handleRemoveFromCart(tshirt._id)}>X</button> </p>) 
            }
        </div>
    );
};

export default Cart;