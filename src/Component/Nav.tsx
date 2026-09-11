import React from 'react';
import Logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <div>
            <div className='flex justify-between items-center container mx-auto mt-5 '>
                <img src={Logo} alt="" />
                <ul className='flex gap-5'>
                    <li className='text-[#D91B7E]'>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About </li>
                    <li>Contact </li>
                </ul>

                <div className='flex gap-3'>
                    <button className="btn rounded-4xl">Sign in</button>
                    <button className="btn btn-active btn-secondary bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-4xl">Sign up</button>

                </div>

            </div>

            <div className="flex w-full flex-col">
                <div className="divider"></div>
            </div>

        </div>
    );
};

export default Nav;