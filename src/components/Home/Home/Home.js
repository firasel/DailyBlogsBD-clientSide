import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Footer from '../../Shared/Footer/Footer';
import Blogs from '../Blogs/Blogs';
import Subscribe from '../Subscribe/Subscribe';
import Header from './../Header/Header';

const Home = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    if(sessionStorage.getItem('verifyToken')){
        fetch('https://dailyblogsbdapi.herokuapp.com/verifyadmin',{
            method: 'GET',
            headers:{
                'Content-Type':'application/json',
                authorization: sessionStorage.getItem('verifyToken')
            }
        })
        .then(res => res.json())
        .then(data => setLoggedInUser(data.authentication))
    }

    return (
        <>
            <Header/>
            <Blogs/>
            <Subscribe/>
            <Footer/>
        </>
    );
};

export default Home;