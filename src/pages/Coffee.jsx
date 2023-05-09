import React, { useEffect, useState } from 'react';
import CoffeeCard from '../components/CoffeeCard';
import { useDataGlobally } from '../context/Context';
import { useLoaderData } from 'react-router-dom';

const Coffee = () => {
    // const { coffees } = useDataGlobally()
    const loderCoffee = useLoaderData()

    const [coffee, setCoffee] = useState(loderCoffee)
    console.log("sjdfjhhb", coffee)
    // useEffect(() => {
    //     setCoffee(coffees)
    // }, [])
    return (
        <main className='max-w-[1240px] mx-auto'>
            <div className='grid md:grid-cols-2 gap-6 mt-10'>
                {
                    coffee.map(singleCoffee => <CoffeeCard key={singleCoffee._id} singleCoffee={singleCoffee}
                        coffee={coffee}
                        setCoffee={setCoffee}
                    />)
                }
            </div>
        </main>
    );
};

export default Coffee;