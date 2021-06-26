import React, { useEffect, useState } from 'react';
import UpdateBlogCard from '../UpdateBlogCard/UpdateBlogCard';

const UpdateBlog = () => {
    const [blogsData,setBlogsData]=useState();
    useEffect(()=>{
        fetch('https://dailyblogsbdapi.herokuapp.com/blogs')
        .then(res=>res.json())
        .then(data=>setBlogsData(data))
        .catch(err=>console.log(err))
    },[])
    console.log(blogsData);
    return (
        <div className="w-full float-right">
            <h2 className="text-center bg-gray-500 text-2xl text-white p-4">Update Any Blogs</h2>
            <div className="sm:m-10 sm:p-5 m-2 p-1">
                {
                    blogsData?.map(data => <UpdateBlogCard key={data._id} blogData={data}/> )
                }
            </div>
        </div>
    );
};

export default UpdateBlog;