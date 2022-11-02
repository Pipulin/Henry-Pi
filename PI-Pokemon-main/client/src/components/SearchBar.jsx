import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNamePokemones } from '../actions';
import './searchBar.css';







export default function SearchBar(){
    
    const dispatch = useDispatch()
    const [name, setName] = useState("")


function handleInputName(e){
    e.preventDefault();
    setName(e.target.value)
    console.log(name)

}
function handleSubmit(e){
    e.preventDefault();
    dispatch(getNamePokemones(name))
    
}


return(
    <div className='search'>
        <input 
        className='input'
        type= 'text'
        placeholder = 'Buscar...'
        onChange={(e) => handleInputName(e)}

    />
    <button 
        className='btn-buscar'
         onClick={(e) => handleSubmit(e) }
         type='submit'>Buscar Pokemones</button>
    </div>
)



}