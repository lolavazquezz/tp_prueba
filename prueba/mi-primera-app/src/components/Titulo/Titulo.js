import React from 'react';
import './Titulo.css';
const Titulo = ({texto="texto default xq no llego nada en la prop texto"}) =>{
    return <h1>{texto}</h1>
}
export default Titulo;