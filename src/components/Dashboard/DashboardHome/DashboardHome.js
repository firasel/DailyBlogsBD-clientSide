import React from 'react';

const DashboardHome = () => {
    return (
        <div className="w-full float-right">
            <div style={{paddingTop:'30%'}}>
                <h1 className="text-lg sm:text-xl md:text-3xl lg:text-5xl text-green-500 text-center font-semibold mb-4">Welcome to The Dashboard</h1>
                <p className="text-sm md:text-lg lg:text-xl text-gray-500 text-center">You Can Post a blog, update and delete any blogs.</p>
            </div>
        </div>
    );
};

export default DashboardHome;