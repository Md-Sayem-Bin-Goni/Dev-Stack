import BannerImg from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <div className='grid grid-cols-12 container mx-auto   mt-11 mb-11'>
            <div className='col-span-6'>
                <h2 className='font-bold text-6xl mt-15 '>Build Your Ideal
                    <span className='bg-linear-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'> Development Stack</span></h2>
                <p className='text-1xl mt-10'>Explore frontend, backend, database, and tooling options, <br />
                    compare them side by side, and put together the stack that fits your <br />
                    next project.
                </p>

                <div className='flex gap-5'>
                    <button className=" mt-10 btn btn-active btn-secondary bg-linear-to-r from-purple-500 via-pink-500 to-red-500 ">Explore Technologies</button>
                    <button className=" mt-10 btn btn-active  ">Learn More</button>
                </div>
            </div>

            <div className='col-span-6 flex justify-center'>
                <img src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;