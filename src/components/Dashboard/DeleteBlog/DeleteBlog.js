import React, { useEffect, useState } from 'react';
import DeleteBlogCard from '../DeleteBlogCard/DeleteBlogCard';

const DeleteBlog = () => {
    const [blogsData,setBlogsData]=useState();
    useEffect(()=>{
        fetch('https://dailyblogsbdapi.herokuapp.com/blogs')
        .then(res=>res.json())
        .then(data=>setBlogsData(data))
        .catch(err=>console.log(err))
    },[])
    return (
        <div className="w-full float-right">
            <h2 className="text-center bg-gray-500 text-2xl text-white p-4">Delete Any Blogs</h2>
            <div className="p-2 sm:m-10 sm:p-5">
                {
                    blogsData?.map(data => <DeleteBlogCard key={data._id} blogData={data}/> )
                }
            </div>
        </div>
    );
};

export default DeleteBlog;