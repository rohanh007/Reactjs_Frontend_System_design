import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Login from '../Login';

const Projectedroute = () => {

    var isauthenticate=false;
    // console.log("Hello");
  
    return isauthenticate ? (<Outlet/>) : (<Navigate to='/login'/>);
}

export default Projectedroute ;