import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { replace } from ' lodash';

export default function RequiredAuth({children, authenticated}) {

    //en un var almacenamos la ultima localización donde estamos

    let location = useLocation();
// si auteticated es false os va a diriir al login para que nos autentifiquemos
    if (!authenticated) {
        return <Navigate to ="/login" state={{from:location}} replace/>
        
    }

    // y si es true iremos a donde queríamos ir desde el inicio
    
    return children


}