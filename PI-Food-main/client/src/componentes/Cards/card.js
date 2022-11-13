import React from 'react';
import { Link } from 'react-router-dom';
import './card.css'
import created from '../Cards/created.png'

export default function Card({name, image, diets,id }){
    return (
        <div className='card'>
            <div className='cardDetail'>
            <Link key={id} className='cartas' to={'/details/' +id}> 
            <h3 className='titlecard'>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
            <div className='imgCard'>
            <img src ={image||created} 
            alt='imagen' 
            width='200px' 
            height='200px' 
            className='img'/>
            </div>
            <h4 className='dietsName'>{diets?.map((el) =>{
               return (<span>{` •${el} `} <br/> </span>
            )})}</h4>                                 
            </Link>
            </div>
        </div>
    )
}