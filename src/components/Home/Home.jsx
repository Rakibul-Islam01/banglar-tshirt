import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const tshirts = useLoaderData();

    const [cart, setCart] = useState([]);

    const handleAddToCart = (tshirt) => {

        const exists = cart.find(ts => ts._id === tshirt.id);
        console.log(exists)
        if (exists) {
            toast('Wow so easy');
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart)
        }


    }

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining)
    }



    return (
        <div className='home-container'>
            <div className="shirts-container">
                {
                    tshirts.map(tshirt => <Tshirt tshirt={tshirt} handleAddToCart={handleAddToCart} key={tshirt.id}></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>
            </div>
            <ToastContainer />
        </div>

    );
};

export default Home; <h2>this is home </h2>