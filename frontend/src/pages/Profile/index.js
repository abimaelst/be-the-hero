import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import './style.css';
import logoImg from '../../assets/logo.svg'; 

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={20} color="#A8A8B3" />
                </button>
            </header>
            <h1>
                Casos Cadastrados
            </h1>
            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCROÇÃO:</strong>
                    <p>CaSO tESTE</p>

                    <strong>VALOR:</strong>
                    <p>120,00</p>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCROÇÃO:</strong>
                    <p>CaSO tESTE</p>

                    <strong>VALOR:</strong>
                    <p>120,00</p>
                </li>

                
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCROÇÃO:</strong>
                    <p>CaSO tESTE</p>

                    <strong>VALOR:</strong>
                    <p>120,00</p>
                </li>

                
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCROÇÃO:</strong>
                    <p>CaSO tESTE</p>

                    <strong>VALOR:</strong>
                    <p>120,00</p>
                </li>
            </ul>

        </div>
    )
};