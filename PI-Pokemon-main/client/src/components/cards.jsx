import React from 'react'
import imagenPoke from '../components/pokebola.png'
import { Link } from 'react-router-dom';

export default function Card({name, img, types, key, id}){
    return(
    <div key={key}>
         <Link key={id} className='cartas' to={'/pokemons/' +id}> 
        <h3>{name}</h3>
        <h5>{types}</h5>
        <img src = {img || imagenPoke } 
        alt ={name} 
        width='150px' 
        height = '150px'/>
        </Link>

    </div>
    );
}

