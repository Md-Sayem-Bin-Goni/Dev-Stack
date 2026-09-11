import React from 'react';
import type { Itechnology } from '../Type/Type';
import TechnologyCard from './TechnologyCard';

interface IAvailableTechnologyProps {
    technology: Itechnology[]
}

const AvailableTechnology = ({ technology }: IAvailableTechnologyProps) => {
    return (
       <div>
         <div className='grid grid-cols-3 gap-4'>
            {
                technology.map((tech: Itechnology) => {
                    return <TechnologyCard tech={tech} key = {tech.id}></TechnologyCard>
                })
            }
        </div>
       </div>
    );
};

export default AvailableTechnology;