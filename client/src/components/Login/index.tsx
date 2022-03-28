import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { Button } from '../../utils/Button';
import './index.css'
import Cinematic from "../../assets/cinematic.mp4";

const Login: React.FC = () => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    Axios.defaults.withCredentials = true;

    const sumbitLogin = () => {
        if (username !== '' && password !== '') {
            Axios.post('http://localhost:3001/login', {
                username,
                password
            }).then(res => {
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
        }

    }

    
    useEffect(() => {
        Axios.get('http://localhost:3001/login').then(res => {
            console.log(res);
        })
    }, [])

    return (
        <>
            <div className="main-container">
                <div className="left-container">
                    <h1 className='login-title'>SE CONNECTER</h1>
                    <div className="login-form">
                        <input onChange={(e:any) => setUsername(e.target.value)} type="text" name="username" placeholder='Entrez votre username' className='login-input' />
                        <input onChange={(e:any) => setPassword(e.target.value)} type="password" name="password" placeholder='Entrez votre mot de passe' className='login-input' />
                        <Button onClick={() => sumbitLogin()} Margin='2rem auto' Background='#1c2833' Color='#d5d8dc' Width='100%' Height='60px'>SE CONNECTER</Button>
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