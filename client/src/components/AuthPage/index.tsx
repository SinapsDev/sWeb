import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';

const AuthPage: React.FC = () => {
    useEffect(() => {
        window.location.href = "http://localhost:3001/discord";
    }, [])

    return (
        <>
            
        </>    
    )
};

export default AuthPage;