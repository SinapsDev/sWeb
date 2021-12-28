import React from 'react';
import { Button } from '../../utils/Button/index'
import Cinematic from "../../assets/cinematic.mp4";

import './index.css';

const Home: React.FC = () => {
    return (
        <>
            <div className="main-block">
                <h1 className='server-title'>Limitless RP</h1>
                <p className='main-text'>Bienvenue sur Limitless RP, un serveur de RolePlay serieux, ici pous pouvez lire le règlement, consulter le WIKI, postuler pour votre whitelist, gérer vos dossiers et plein d'autres fonctionnalités.</p>
                <div className="btn-container">
                    <Button Width='30%' Color='#000' Background='#52be80'>SE CONNECTER</Button>
                    <Button Width='30%' Color='#000' Background='#52be80'>S'INSCRIRE</Button>
                </div>
            </div>
            <div className="black-opacity"></div>
            <video className='cinematic-video' autoPlay muted loop>
                <source src={Cinematic} type="video/mp4" />
            </video>
        </>
    )
}

export default Home;