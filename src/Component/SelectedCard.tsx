import { type Dispatch, type SetStateAction } from 'react';
import type { Itechnology } from '../Type/Type';
import { RxCross2 } from 'react-icons/rx';
import { Bounce, toast } from 'react-toastify';

interface setSelectedTechnology {
    technology: Itechnology
    selectedTechnology: Itechnology[]
    setSelectedTechnology: Dispatch<SetStateAction<Itechnology[]>>

}


const SelectedCard = ({ technology, selectedTechnology, setSelectedTechnology }: setSelectedTechnology) => {

    const handleRemovetechnology = (technology: Itechnology) => {
        const restTechnology = selectedTechnology.filter(selectedTechnology => selectedTechnology.name != technology.name)
        setSelectedTechnology(restTechnology);

        toast.info(`${technology.name} Removed from stack`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });


    }

    return (
        <div
            key={technology.id}
            className="flex items-center justify-between border border-gray-200 rounded-xl p-3 mb-2"
        >

            {/* Logo + Information */}
            <div className="flex items-center gap-3">

                <img
                    src={technology.logo}
                    alt={technology.name}
                    className="w-9 h-9 object-contain"
                />

                <div>
                    <h3 className="font-semibold text-sm text-gray-800">
                        {technology.name}
                    </h3>

                    <p className="text-[10px] text-gray-400">
                        {technology.category}
                    </p>
                </div>

            </div>


            {/* Remove Button */}
            <button
                onClick={() => handleRemovetechnology(technology)}
                className="btn btn-ghost btn-circle btn-sm text-gray-400 hover:text-red-500"
            >
                <RxCross2 size={22} />
            </button>

        </div>

    );

};

export default SelectedCard;