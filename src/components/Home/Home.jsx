import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts = useLoaderData();
    return (
        <div>
          <h2>this is home {tshirts.length}</h2>  
        </div>
    );
};

export default Home;<h2>this is home </h2>