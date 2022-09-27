import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNamePokemones } from '../actions';






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
    <div>
        <input 
        type= 'text'
        placeholder = 'Buscar...'
        onChange={(e) => handleInputName(e)}

    />
    <button 
         onClick={(e) => handleSubmit(e) }
         type='submit'>Buscar Pokemones</button>
    </div>
)



}