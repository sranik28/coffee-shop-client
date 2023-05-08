import React from 'react';
import AddCoffee from '../components/Addcoffee';
import UpdateCoffee from '../components/UpdateCoffee';
import Coffee from './Coffee';

const Home = () => {
    return (
        <div>
            <Coffee />
            <AddCoffee />
            <UpdateCoffee />
        </div>
    );
};

export default Home;