import React from 'react';

const Subscribe = () => {
    return (
        <div className="bg-gray-300 text-center py-8 px-16 sm:px-5">
            <h2 className="text-center text-4xl mt-5 font-bold pb-4">Join our occasional newsletter</h2>
            <form>
                <input className=" w-full sm:w-6/12 md:w-4/12 my-4 p-2 text-base outline-none text-center bg-gray-300 border-b-4 border-gray-800" type="email" placeholder="Please Enter Your Email"/>
                <br/>
                <button className="my-4 p-3 bg-blue-500 hover:bg-blue-600 duration-300 rounded-lg text-white font-semibold" type="submit">Subscribe</button>
            </form>
        </div>
    );
};

export default Subscribe;