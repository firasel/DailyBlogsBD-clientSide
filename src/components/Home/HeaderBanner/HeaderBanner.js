import React from 'react';

const HeaderBanner = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-whit p-4 md:px-8">
                <div className="my-10 sm:my-3 p-2">
                    <h2 className=" text-2xl md:text-4xl text-semibold text-purple-500 mb-2">Welcome to <br/><span className="text-purple-600 text-3xl md:text-5xl">DailyBlogsBD</span></h2>
                    <p className="text-lg text-gray-500">Read Blogs for free.</p>
                </div>
                <div>
                    <img className="w-full" src="https://i.ibb.co/FxHSZ5n/reading-book-generated.jpg"/>
                </div>
            </div>
        </div>
    );
};

export default HeaderBanner;