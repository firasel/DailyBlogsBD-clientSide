import React, { useEffect, useState } from 'react';
import BlogsCard from '../BlogsCard/BlogsCard';

const Blogs = () => {
    const [blogsData,setBlogsData]=useState()
    useEffect(()=>{
        fetch('https://dailyblogsbdapi.herokuapp.com/blogs')
        .then(res=>res.json())
        .then(data=>setBlogsData(data))
        .catch(err=>console.log(err))
    },[])

    return (
        <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-green-400 text-center p-2 md:p-5 ">All Blogs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {
                blogsData?.map(data => <BlogsCard key={data._id} blogData={data}/>)
            }
            </div>
        </div>
    );
};

export default Blogs;