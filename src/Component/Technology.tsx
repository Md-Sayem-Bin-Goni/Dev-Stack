import React, { use } from 'react';
import type { Itechnology } from '../Type/Type';
import TechnologyCard from './TechnologyCard';
import AvailableTechnology from './AvailableTechnology';

interface ItechnologyProps {
    dataPromise: Promise<Itechnology[]>
}

const Technology = ({ dataPromise }: ItechnologyProps) => {
    const technology = use(dataPromise)
    // console.log(technology);
    return (
        <div className='container mx-auto grid grid-cols-12'>
            <div className='col-span-9'>
                <h2 className='text-4xl font-bold'>Explore the <span className='bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>Technologies</span></h2>
                <p className='mt-3 mb-5'>Pick one technology per category to build your ideal stack.</p>

                <AvailableTechnology technology={technology}></AvailableTechnology>
            </div>






        </div>
    );
};

export default Technology;