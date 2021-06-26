import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';

const BlogShow = () => {
    const [blogData,setBlogData] = useState({});
    let { id } = useParams();

    useEffect(()=>{
        fetch(`https://dailyblogsbdapi.herokuapp.com/blog/${id}`)
        .then(res=>res.json())
        .then(result=>{
            setBlogData(result)
        })
        .catch(err=>alert(err));
    },[])

    return (
        <div>
            <NavBar/>
            <div className="mx-7 my-4">
                <div className="p-3">
                    <img className="w-10/12 sm:w-9/12 md:w-7/12 lg:w-6/12 m-auto mb-8 rounded-xl shadow-lg" src={blogData.coverImg} />
                    <div className="mx-2 sm:mx-10 md:mx-20 lg:mx-32">
                        <h2 className="text-xl md:text-3xl text-center font-semibold mb-5">{blogData.title}</h2>
                        <div className="text-lg whitespace-pre-wrap md:text-xl tracking-wider">{blogData.content}</div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default BlogShow;