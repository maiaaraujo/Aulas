import "./estilo.css";
import React from 'react';
import { Link } from 'react-router-dom';

function Lista () {
  let cursos = [
    'Marketing',
    'Fullstack',
    'Data Analytics',
  ];

  return (
  <ul>
    {cursos.map(cada => <li>{cada}</li>)}
  </ul>
  );
}

export default function App() {
  let nome = "Chiquim";

return (
    <div>
      <header>
        
      </header>
      <h1 className="blue">Ola mundo</h1>
      <h2 className="red">Digital College</h2>

      <hr/>

      <p>
        Bem vindo {nome}
      </p>
    
    <Lista/>
   
   </div>
  )
}
