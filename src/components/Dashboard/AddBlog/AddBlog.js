import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddBlog = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageUrl,setImageUrl]=useState(null);
    const [imgUploadSuccess,setImgUploadSuccess]=useState(false);
    
    const onSubmit=data=>{
        data.coverImg=imageUrl;
        if(data.coverImg){
            fetch('https://dailyblogsbdapi.herokuapp.com/addblog',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(data)
            })
            .then(res=>res.json())
            .then(result=>{
                if(result){
                    alert('Blog Published SuccessFully.');
                }
            })
            .catch(err=>alert(err))
        }else {
            alert("Please Upload The Cover Image.");
        }
    }


    const handleImageUpload=event=>{
        setImgUploadSuccess(true);
        const imageData = new FormData();
        imageData.set('key','a52d1dcbb5d9055fd1a000e42d4f0578');
        imageData.append('image',event.target.files[0])
        fetch('https://api.imgbb.com/1/upload',{
            method:'POST',
            body:imageData
        })
        .then((res) =>res.json())
        .then(data=>{
            setImageUrl(data.data.display_url);
            setImgUploadSuccess(false);
        })
        .catch(error=>{
            console.log('Error: ',error);
            setImgUploadSuccess(false);
            setImageUrl(null);
            alert("Something Wrong, Please Select an Image and try again.");
        });  
    }


    return (
        <div className="w-full float-right">
            <h2 className="text-center bg-gray-500 text-2xl text-white p-4">Publish A Blog</h2>
            <div>
                <form className="p-8 rounded-xl shadow-2xl w-10/12 mx-auto my-5" onSubmit={handleSubmit(onSubmit)}>
                    <label className="font-semibold text-lg">Title</label>
                    <input className="w-full border-b-2 border-gray-800 p-1 mb-5 text-lg mt-2" type="text" placeholder="Enter the Blog Title" {...register("title", { required: true })} />
                    {errors.packageName && <span className='text-red-600'>Title is required</span>}
                    <br/>
                    <label className="font-semibold text-lg mr-4">Content</label>
                    <textarea className="w-full border-b-2 border-gray-800 p-1 mb-5 mt-2 text-lg" rows={3} type="text" placeholder="Write Your Blogs" {...register("content", { required: true })} />
                    {errors.packageDetail && <span className='text-red-600'>Content is required</span>}
                    <br/>
                    <label className="font-semibold text-lg mb-5">Upload Cover Image</label>
                    <div className='w-full flex justify-between my-6'>
                        <input onChange={handleImageUpload} type="file" />
                        {
                            imgUploadSuccess && <span className="text-lg text-gray-700 font-semibold">Uploading...</span>
                        }
                    </div>
                    <div className="text-right mt-2">
                        <button className='px-5 py-2 hover:bg-gray-900 bg-gray-700 rounded-lg text-white font-semibold text-xl' type='submit'>Post Blogs</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBlog;