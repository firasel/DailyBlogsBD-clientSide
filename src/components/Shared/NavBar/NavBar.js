import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const NavBar = () => {
    const [isExpand,setIsExpand] = useState(false);
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);

    return (
        <header className="border-b md:flex md:items-center md:justify-between pb-0 shadow-lg md:pb-2">
            <div className="flex items-center justify-between px-4 mb-4 md:mb-0">
                <div>
                    <img className="w-5/12 sm:w-3/12" src="https://i.ibb.co/tXLBw9k/logo.png" />
                </div>
                <a onClick={()=> setIsExpand(!isExpand) } className="md:hidden p-2 hover:bg-gray-100 duration-200 rounded-md" href="#">
                    <FontAwesomeIcon className={`${isExpand?'rotate-90':'rotate-0'} transform text-3xl text-black hover:text-yellow-600 transition-all duration-400`} icon={faBars} />
                </a>
            </div>
            <nav className={`absolute rounded-lg shadow-lg w-screen p-4 bg-gray-50 transform origin-top transition-all duration-300 md:relative md:scale-y-100 md:py-2 md:rounded-none md:shadow-none md:w-max md:bg-white ${isExpand?'scale-y-100':'scale-y-0'}`}>
                <ul className="list-reset md:flex md:items-center">
                    <li className="md:ml-4">
                        <Link to="/home" className="block no-underline py-2 text-gray-600 font-bold hover:text-black md:border-none md:px-3">Home</Link>
                    </li>
                    {
                        loggedInUser &&
                        <li className="md:ml-4">
                            <Link to="/dashboard" className="border-t block no-underline py-2 text-gray-600 font-bold hover:text-black md:border-none md:px-3">DashBoard</Link>
                        </li>
                    }
                    <li className="md:ml-4">
                        <Link to="/login" className="border-t block no-underline py-2 text-gray-600 font-bold hover:text-black md:border-none md:px-3">LogIn</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;