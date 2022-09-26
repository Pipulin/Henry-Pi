import React from 'react'

export default function Paginado({pokemonesPerPage, allPokemones, paginado}){

    const pageNumbers = []

    
    for (let i=0; i< Math.ceil(allPokemones/pokemonesPerPage); i++){ //con math.ceil redondeo para arriba, en este caso traigo todos mis pokemones y los divido sobre la cantidad que quiero por pagina, pusheo en la constante pageNumbers.
        pageNumbers.push(i + 1)//le sumo 1 asi no arranca en 0 el paginado
    }
    return (
        <nav >
            <ul className='paginado'>
                {pageNumbers &&
                pageNumbers.map(number =>(
                    <li className='number' key={number}>
                         <a onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
        //en esta funcion renderizamo cada numero del paginado por separado.
    )
}