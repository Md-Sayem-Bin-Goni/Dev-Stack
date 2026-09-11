import React, { type Dispatch, type SetStateAction } from 'react';
import type { Itechnology } from '../Type/Type';
import TechnologyCard from './TechnologyCard';

interface IAvailableTechnologyProps {
    technology: Itechnology[]
    selectedTechnology: Itechnology[]
    setSelectedTechnology: Dispatch<SetStateAction<Itechnology[]>>
}


const AvailableTechnology = ({ technology, selectedTechnology, setSelectedTechnology }: IAvailableTechnologyProps) => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-4'>
                {
                    technology.map((tech: Itechnology) => {
                        return <TechnologyCard tech={tech} key={tech.id} selectedTechnology={selectedTechnology} setSelectedTechnology={setSelectedTechnology}></TechnologyCard>
                    })
                }
            </div>


        </div>
    );
};

export default AvailableTechnology;