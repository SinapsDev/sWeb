import React, { useState } from 'react';
import Axios from 'axios';
import { Button } from '../../utils/Button';
import './index.css'
import Cinematic from "../../assets/cinematic.mp4";

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submitRegister = () => {
        if (username !== '' && password !== '' && confirmPassword !== '' && email !== '') {
            Axios.post('http://localhost:3001/register', {
                email,
                username,
                password,
                confirmPassword
            }).then(res => {
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
        }
    }

    return (
        <>
            <div className="main-container">
                <div className="left-container">
                    <h1 className='register-title'>S'INSCRIRE</h1>
                    <div className="register-form">
                        <input onChange={(e:any) => setEmail(e.target.value)} type="text" name="email" placeholder='Entrez votre email' className='register-input' />
                        <input onChange={(e:any) => setUsername(e.target.value)} type="text" name="username" placeholder='Entrez votre username' className='register-input' />
                        <input onChange={(e:any) => setPassword(e.target.value)} type="password" name="password" placeholder='Entrez votre mot de passe' className='register-input' />
                        <input onChange={(e:any) => setConfirmPassword(e.target.value)} type="password" name="confirmpassword" placeholder='Confirmer votre mot de passe' className='register-input' />
                        <Button onClick={() => submitRegister()} Margin='2rem auto' Background='#1c2833' Color='#d5d8dc' Width='100%' Height='60px'>S'INSCRIRE</Button>
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