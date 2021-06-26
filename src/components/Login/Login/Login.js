import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';

const Login = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const onSubmit= data => {
        fetch('https://dailyblogsbdapi.herokuapp.com/login',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(data)
            })
            .then(res=>res.json())
            .then(result=>{
                if(result.authentication){
                    sessionStorage.setItem('verifyToken',result.jwtToken);
                    setLoggedInUser(result.authentication);
                    history.replace(from);
                }else{
                    setLoggedInUser(result.authentication);
                    throw new Error(result.error);
                }
            })
            .catch(err=>console.log(err))
    }

    
    return (
        <div>
            <NavBar/>
            <div className="m-auto w-11/12 sm:w-8/12 md:w-7/12 lg:w-5/12 shadow-xl md:shadow-2xl rounded-xl mt-4 sm:mt-10 md:mt-16 lg:mt-20 p-5">
                <form className='py-6' onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex">
                        <label className="text-xl font-semibold pr-2 mt-1">Email: </label>
                        <input className="text-xl p-1 w-full border-b-2 border-gray-700" type="email" placeholder="Enter Your Email" {...register("email", { required: true })} />
                    </div>
                    <div className="flex my-4">
                        <label className="text-xl font-semibold pr-2 mt-1">Password: </label>
                        <input className="text-xl p-1 w-full border-b-2 border-gray-700" type="password" placeholder="Enter Your Password" {...register("password", { required: true })} />
                    </div>
                    <button className="w-full p-2 text-2xl bg-green-400 hover:bg-green-600 text-white font-bold rounded-md" type="submit">LogIn</button>
                </form>
            </div>
            <div className="mt-64 sm:mt-72">
                <Footer/>
            </div>
        </div>
    );
};

export default Login;