import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNameRecipes } from '../../actions';



export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleName(e){
        e.preventDefault()
        setName(e.target.value)

    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNameRecipes(name))
    }

    return(
        <div className='searchBar'>
            <input 
                onChange={(e) =>handleName(e)}
                type='text'
                placeholder='Buscar la receta...'/>

            <button 
                type='submit' 
                onClick={(e) =>handleSubmit(e)}>Buscar
            </button>

        </div>
    )
}
