import { use, useState } from 'react';
import type { Itechnology } from '../Type/Type';
import AvailableTechnology from './AvailableTechnology';
import SelectedTechnology from './SelectedTechnology';


interface ItechnologyProps {
    dataPromise: Promise<Itechnology[]>
}


const Technology = ({ dataPromise }: ItechnologyProps) => {
    const technology = use(dataPromise)
    const [selectedTechnology, setSelectedTechnology] = useState<Itechnology[]>([])

    return (
        <div className='container mx-auto grid  grid-cols-12  '>
     
                <div className='col-span-9'>
                    <h2 className='text-4xl font-bold'>Explore the <span className='bg-linear-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>Technologies</span></h2>
                    <p className='mt-3 mb-5'>Pick one technology per category to build your ideal stack.</p>

                    <AvailableTechnology technology={technology} selectedTechnology={selectedTechnology} setSelectedTechnology={setSelectedTechnology}></AvailableTechnology>
                </div>
          

            <div className='col-span-3'>
                <div>
                    <SelectedTechnology selectedTechnology={selectedTechnology} setSelectedTechnology={setSelectedTechnology} ></SelectedTechnology>
                </div>
            </div>
        </div>
    );
};

export default Technology;