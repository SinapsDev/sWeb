import React from 'react';
import { Button } from '../../utils/Button';
import './index.css'
import Cinematic from "../../assets/cinematic.mp4";

const Register: React.FC = () => {
    return (
        <>
            <div className="main-container">
                <div className="left-container">
                    <h1 className='register-title'>S'INSCRIRE</h1>
                    <div className="register-form">
                        <input type="text" name="email" placeholder='Entrez votre email' className='register-input' />
                        <input type="text" name="username" placeholder='Entrez votre username' className='register-input' />
                        <input type="password" name="password" placeholder='Entrez votre mot de passe' className='register-input' />
                        <input type="password" name="confirmpassword" placeholder='Confirmer votre mot de passe' className='register-input' />
                        <Button Margin='2rem 0 0 0' Background='#1c2833' Color='#d5d8dc' Width='100%' Height='60px'>S'INSCRIRE</Button>
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

export default Register;