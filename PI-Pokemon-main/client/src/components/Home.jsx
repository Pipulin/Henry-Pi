import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getApiInfo} from '../actions';
import {Link} from 'react-router-dom';
import Card from './cards'


export default function Home (){
    const dispatch = useDispatch()
    const allPokemones = useSelector((state) => state.pokemones)
    
    useEffect(() =>{        
        dispatch(getApiInfo())
    },[dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch(getApiInfo())
    }    
    return (                      
        <div>
            <Link to = '/poke'>Crear Pokemon</Link>
            <h1>Pokemons</h1>
            <button onClick = {e => {handleClick(e)}}>
                Volver a cargar los Pokemones
            </button>
        <div>
            <select>
                <option value='asc'> Ascendente</option>
                <option value='desc'> Descendente</option>
            </select>
            <select>
                <option value = 'api'>Existentes</option>
                <option value = 'tipo'>Tipo</option>
                <option value= 'db'>Creados</option>
            </select>
        {
            allPokemones && allPokemones.map( (el) =>{           
              return(

                   <Link className='cartas' to={'/home/' + el.id}> 
                        <Card 
                        key={el.id}
                        id={el.id}
                        name={el.name} 
                        img={el.img} 
                        type={el.type} 
                        />
                    </Link>               
               );
            })
        }                                 
            </div>
        </div>           
    )           
}
//export default Home;