import React from 'react';
import { useHistory } from 'react-router-dom';

const BlogsCard = ({blogData}) => {
    const {title, coverImg, _id}=blogData;
    let history = useHistory();
    return (
        <div>
            <div className="w-full p-3">
                <div onClick={()=>history.push(`/blog/${_id}`)} className="bg-white rounded-3xl shadow-xl overflow-hidden text-white cursor-pointer hover:text-green-400 transform hover:scale-105 duration-200">
                    <div className="bg-cover h-96 flex items-end p-4" style={{backgroundImage:`url(${coverImg})`}}>
                        <h3 className="font-bold text-2xl transform hover:scale-95 duration-200">{title}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogsCard;