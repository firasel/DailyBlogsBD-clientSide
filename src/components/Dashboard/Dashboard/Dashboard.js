import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faBars, faPlus, faTrash, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import {
    BrowserRouter as Router,
    Link, Route, Switch, useHistory
} from "react-router-dom";
import { UserContext } from '../../../App';
import AddBlog from '../AddBlog/AddBlog';
import DashboardHome from '../DashboardHome/DashboardHome';
import DeleteBlog from '../DeleteBlog/DeleteBlog';
import UpdateBlog from '../UpdateBlog/UpdateBlog';
import UpdateBlogForm from '../UpdateBlogForm/UpdateBlogForm';

const Dashboard = () => {
    let history = useHistory();
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const [isHide,setIsHide] = useState(false);
    return (
        loggedInUser && (
            <Router>
                <div className="flex">
                    <div className={`${isHide?'block':'hidden'} sm:hidden absolute sm:relative bg-none sm:bg-green-800 sm:h-screen px-3 py-1 overflow-hidden`}>
                        <button onClick={() => setIsHide(false)} className="block md:hidden px-2 py-1 m-2 rounded-lg text-white bg-green-900 text-lg hover:bg-green-400 hover:text-black">
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                    <div className={`${isHide?'hidden':'block'} sm:block absolute z-10 sm:relative w-full sm:w-72 bg-green-800 h-screen text-2xl text-white overflow-hidden`}>
                        <div className="overflow-hidden relative">
                            <img onClick={()=> history.push('/home')} className="px-5 py-6 cursor-pointer" src="https://i.ibb.co/tXLBw9k/logo.png"/>
                            <button onClick={() => setIsHide(true)} className="sm:hidden absolute top-0 right-0 block md:hidden px-2 py-1 m-2 rounded-lg text-white bg-green-900 text-lg hover:bg-green-400 hover:text-black">
                                <FontAwesomeIcon icon={faWindowClose} />
                            </button>
                        </div>
                        <div>
                            <Link to="/dashboard/addblog">
                                <button className='w-full border-b-2 border-gray-400 text-left p-4 hover:bg-green-500'><FontAwesomeIcon icon={faPlus}/> Post Blog</button>
                            </Link>
                            <Link to="/dashboard/updateblog">
                                <button className='w-full border-b-2 border-gray-400 text-left p-4 hover:bg-green-500'><FontAwesomeIcon icon={faEdit}/> Update Blog</button>
                            </Link>
                            <Link to="/dashboard/deleteblog">
                                <button className='w-full border-b-2 border-gray-400 text-left p-4 hover:bg-green-500'><FontAwesomeIcon icon={faTrash}/> Delete Blog</button>
                            </Link>
                        </div>
                    </div>
                    <Switch>
                        <Route exact path="/dashboard">
                            <DashboardHome/>
                        </Route>
                        <Route exact path="/dashboard/addblog">
                            <AddBlog/>
                        </Route>
                        <Route exact path="/dashboard/updateblog">
                            <UpdateBlog/>
                        </Route>
                        <Route exact path="/dashboard/deleteblog">
                            <DeleteBlog/>
                        </Route>
                        <Route exact path="/dashboard/updateblog/:id">
                            <UpdateBlogForm/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    );
};

export default Dashboard;