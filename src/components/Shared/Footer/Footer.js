import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div className="bg-gray-800 overflow-hidden p-2">
            <div className='text-3=2xl text-center mt-3'>
                <button className='text-blue-600 p-2 mx-2 bg-gray-400 hover:bg-white rounded-full'>
                    <FontAwesomeIcon icon={faFacebook} />
                </button>
                <button className='text-indigo-700 p-2 mx-2 bg-gray-400 hover:bg-white rounded-full'>
                    <FontAwesomeIcon icon={faTwitter} />
                </button>
                <button className='text-blue-900 p-2 mx-2 bg-gray-400 hover:bg-white rounded-full'>
                    <FontAwesomeIcon icon={faLinkedin} />
                </button>
            </div>
            <div className="py-2">
                <p className="text-center text-white">Copyright&copy;2021 DailyBlogsBD All Right Reserved</p>
            </div>
        </div>
    );
};

export default Footer;