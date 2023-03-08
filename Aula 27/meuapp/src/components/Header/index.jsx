import React from 'react';
import './index.css';


export default function Header()
{
    return(
        <>
            <header>
               <div className='logo'>Logo</div>
               <div className='busca'>Busca</div>
               <button>Cadastre-se</button>
               <button>Entrar</button>
            </header>
        </>
    )
}