import React from 'react';
import type { Itechnology } from '../Type/Type';

interface ItechnologyCardProps {
    tech: Itechnology
}

const TechnologyCard = ({ tech }: ItechnologyCardProps) => {

    return (
        <div className=''>


            <div className="  card bg-base-100 border border-gray-200 shadow-sm rounded-xl p-5">

                {/* Logo + Badge */}
                <div className="flex justify-between ">
                    <img
                        src={tech.logo}
                        alt={tech.name}
                        className="w-8 h-8"
                    />

                    {tech.badge && (
                        <span className="badge badge-soft badge-info text-xs">
                            {tech.badge}
                        </span>
                    )}
                </div>

                {/* Name */}
                <h2 className="text-lg font-bold mt-5">
                    {tech.name}
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-500 mt-2 leading-6 min-h-[72px]">
                    {tech.description}
                </p>

                {/* Divider */}
                <div className="border-t border-gray-100 my-4"></div>

                {/* Category, Level, Rating */}
                <div className="flex justify-between items-center text-xs">

                    <span className="bg-gray-100 px-2 py-1 rounded">
                        {tech.category}
                    </span>

                    <span className="text-gray-500">
                        {tech.level}
                    </span>

                    <span className="flex items-center gap-1">
                        <span className="text-yellow-500">★</span>
                        {tech.rating}
                    </span>

                </div>

                {/* Button */}
                <button className="btn btn-neutral btn-sm w-full mt-4">
                    Add to Stack
                </button>

            </div>
        </div>
    );
};

export default TechnologyCard;