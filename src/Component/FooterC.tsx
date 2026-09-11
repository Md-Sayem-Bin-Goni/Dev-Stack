import React from 'react';
import footerLogo from '../assets/logo-text.png'

const FooterC = () => {
    return (
        <div className='mt-30'>
            <div className="divider mb-9"></div>

            <div className='grid grid-cols-4 container mx-auto'>
                <div>
                    <img src={footerLogo} alt="" className='mb-5'/>
                    <p className='mb-5'>Curated tools, technologies, and resources for developers building
                        modern software.
                    </p>

                    <ul className='flex gap-5 font-bold'>
                        <li>GitHub</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>


                <div className=''>
                    <h2 className='font-bold mb-2'>PRODUCT</h2>
                    <p className='mb-2'>Home</p>
                    <p className='mb-2'>Technologies</p>
                    <p className='mb-2'>Projects</p>
                </div>


                <div>
                    <h2 className='font-bold mb-2'>COMPANY</h2>
                    <p className='mb-2'>About</p>
                    <p className='mb-2'>Contact</p>
                    <p className='mb-2'>Careers</p>

                </div>


                <div>
                    <h2 className='font-bold mb-2'>LEGAL</h2>
                    <p className='mb-2'>Privacy Policy</p>
                    <p className='mb-2'>Terms of Service</p>
                </div>


            </div>

            <div className="divider mb-5 container mx-auto"></div>



            <div className='flex justify-between mb-5 container mx-auto'>
                <div><p>© 2026 Dev Stack. All rights reserved.</p></div>
                <div><p>Privacy     Terms</p></div>
            </div>
        </div>
    );
};

export default FooterC;