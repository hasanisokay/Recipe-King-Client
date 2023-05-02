import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const PrivateRoute = ({children}) => {
    
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <button className="btn loading">loading</button>
    }
    const location =useLocation()
    if(! user ){
        return <Navigate to="login" state={location}></Navigate>
    }
    return children
};

export default PrivateRoute;