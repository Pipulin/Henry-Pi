import React from 'react'
import imagenPoke from '../components/pokebola.png'
import { Link } from 'react-router-dom';
import './cards.css';

export default function Card({name, img, types,id}){
    return(
    <div className='cards'>
        <div className='carDetail'>
            <Link key={id} className='cartas' to={'/pokemons/' +id}> 
            <h3 className='textTitulo'>{name.toUpperCase()}</h3>
            <h5 className='tipoName'>{types}</h5>
            <div className='imgCard'>
                <img                 
                src = {img || imagenPoke } 
                alt ={name} 
                width='150px' 
                height = '150px'/>
            </div>
            </Link>
        </div>

    </div>
    );
}

