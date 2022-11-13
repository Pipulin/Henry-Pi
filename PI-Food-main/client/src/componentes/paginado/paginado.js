import React from "react";
import './paginado.css'

export default function Paginado({recipesPerPage, allRecipes, paginado}){
    const pageNumbers = []
    // console.log(pageNumbers)

    for (let i=0; i< Math.ceil(allRecipes/recipesPerPage); i++){
    pageNumbers.push(i + 1)
    }

    return (
        <div>
            <ul className='paginado'>
                {pageNumbers &&
                 pageNumbers.map(number =>(
                <li className='number' key={number}>
                     <a onClick={() => paginado(number)}>{number}</a>
                </li>
            ))}
             </ul>
        </div>
  
)
}