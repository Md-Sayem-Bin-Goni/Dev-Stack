import React, { type Dispatch, type SetStateAction } from 'react';
import SelectedCard from './SelectedCard';
import type { Itechnology } from '../Type/Type';


interface ISelectedTechnologyProps {
    selectedTechnology: Itechnology[]
    setSelectedTechnology: Dispatch<SetStateAction<Itechnology[]>>
}

const SelectedTechnology = ({ selectedTechnology, setSelectedTechnology }: ISelectedTechnologyProps) => {


    const handleRemoveAll = () => {
        setSelectedTechnology([])
    }
    return (
        <div >


            <div className=" ml-15 mt-24 border border border-gray-300 rounded-xl  items-center justify-center p-5">
                <h2 className='text-2xl font-bold'>Your Stack</h2>
                <div className='mb-5'>
                    {
                        selectedTechnology.length === 0 ? (
                            <p>No technology is selected yet</p>
                        ) : <p className="text-sm text-gray-400 mt-1">
                            {selectedTechnology.length} Technology Selected
                        </p>
                    }
                </div>





                {selectedTechnology.length === 0 ?
                    (
                        <div className=" border border-dashed border-gray-300 rounded-xl flex items-center justify-center">
                            <p className="text-sm text-gray-400">
                                Your stack is empty.
                            </p>
                        </div>
                    )
                    :
                    (
                        selectedTechnology.map((technology: Itechnology) => {
                            return (
                                <SelectedCard key={technology.id} technology={technology} selectedTechnology={selectedTechnology} setSelectedTechnology={setSelectedTechnology} ></SelectedCard>
                            )
                        })
                    )
                }


                {selectedTechnology.length > 0 && (
                    <button
                        onClick={handleRemoveAll}
                        className="btn btn-outline btn-error w-full mt-12"
                    >
                        Remove All
                    </button>
                )}

            </div>







        </div>
    );
};

export default SelectedTechnology;