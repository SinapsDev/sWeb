import React from 'react';
import { Button } from '../../utils/Button';
import './index.css'
import Cinematic from "../../assets/cinematic.mp4";

const Login: React.FC = () => {
    return (
        <>
            <div className="main-container">
                <div className="left-container">
                    <h1 className='login-title'>SE CONNECTER</h1>
                    <div className="login-form">
                        <input type="text" name="username" placeholder='Entrez votre username' className='login-input' />
                        <input type="password" name="password" placeholder='Entrez votre mot de passe' className='login-input' />
                        <Button Margin='2rem auto' Background='#1c2833' Color='#d5d8dc' Width='100%' Height='60px'>SE CONNECTER</Button>
                    </div>
                </div>
                <div className="right-container">
                    <div className="black-opacity"></div>
                    <video className='cinematic-video' autoPlay muted loop>
                        <source src={Cinematic} type="video/mp4" />
                    </video>
                </div>
            </div>
        </>
    )
};

export default Login;