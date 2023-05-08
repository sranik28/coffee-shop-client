import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from '../components/CoffeeCard';
import { useDataGlobally } from '../context/Context';

const Coffee = () => {
    const {coffees}=useDataGlobally()
    console.log("coffee-8",coffees)
    return (
        <div>
            {
                coffees.map(singleCoffee => <CoffeeCard key={singleCoffee._id} singleCoffee={singleCoffee} />)
            }
        </div>
    );
};

export default Coffee;