import React from 'react';
import './style.css';
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

export default function Logon() {
    return (
       <div className="logo-container">
           <section className="form">
             <img src={logoImg} alt="Be The Hero"/>
             <form action="">
                 <h1>Faca seu logon</h1>

                 <input placeholder="Sua ID"/>
                 <button type="submit">Entrar</button>

                 <a href="/register">Nao tenho cadastro</a>
             </form>
           </section>
           <img src={heroesImg} alt="Heroes"/>
       </div>
    );
}