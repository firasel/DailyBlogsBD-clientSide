import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router-dom';

const UpdateBlogCard = ({blogData}) => {
    const {title, coverImg, _id}=blogData;
    const id= _id;
    let history = useHistory();

    return (
        <div className="bg-gray-300 rounded-lg sm:mx-0 my-7 overflow-hidden sm:flex items-center justify-between transform hover:shadow-xl hover:scale-105 duration-300">
            <div className="sm:flex items-center">
                <img className="w-full sm:w-1/6 rounded-t-xl sm:rounded-none" src={coverImg}/>
                <h2 className="float-left sm:float-none mt-2 sm:mt-0 text-lg font-semibold px-4">{title}</h2>
            </div>
            <div className="mr-4">
                <button onClick={() => history.push(`/dashboard/updateblog/${id}`)} className="float-right sm:float-none text-2xl rounded-lg text-red-600 p-2 hover:bg-gray-800 hover:text-red-500">
                    <FontAwesomeIcon icon={faEdit} />
                </button>
            </div>
        </div>
    );
};

export default UpdateBlogCard;