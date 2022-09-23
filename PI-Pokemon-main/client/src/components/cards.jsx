import React from 'react'

export default function Card({name, img, types, key}){
    return(
    <div key={key}>
        <h3>{name}</h3>
        <h5>{types}</h5>
        <img src = {img} alt ={name} width='150px' height = '150px'/>

    </div>
    );
}

