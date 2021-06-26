import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const DeleteBlogCard = ({blogData}) => {
    const {title, coverImg, _id}=blogData;
    const [isdelete,setIsDelete]=useState(false);
    const handleDeleteBlog = () => {
        fetch(`https://dailyblogsbdapi.herokuapp.com/deleteblog/${_id}`,{
            method:'DELETE',
            headers:{'Content-Type':'application/json'}
        })
        .then(res=> res.json())
        .then(data=>{
            if(data){
                setIsDelete(true);
                alert('Blog Deleted SuccessFully');
            }
        })
        .catch(err=>alert('Something wrong, try again.'));
    }

    return (
        <div className={`${isdelete?'hidden' : 'block'} bg-gray-300 rounded-lg mx-8 sm:mx-0 my-7 overflow-hidden sm:flex items-center justify-between transform hover:shadow-xl hover:scale-105 duration-300`}>
            <div className="sm:flex items-center">
                <img className="w-full sm:w-1/6 rounded-t-xl sm:rounded-none" src={coverImg}/>
                <h2 className="float-left sm:float-none mt-2 sm:mt-0 text-lg font-semibold px-4">{title}</h2>
            </div>
            <div className="mr-4">
                <button onClick={handleDeleteBlog} className="float-right sm:float-none text-2xl rounded-lg text-red-600 p-2 hover:bg-gray-800 hover:text-red-500">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
};

export default DeleteBlogCard;