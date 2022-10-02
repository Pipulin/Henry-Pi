import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getApiInfo, 
        filterPokemonesByType, 
        filterCreated,
        filterAzZa,
        filterAttack
       } from '../actions';
import {Link} from 'react-router-dom';
import Card from './cards'
import Paginado from './paginado';
import SearchBar from './SearchBar';


export default function Home (){


    const dispatch = useDispatch()
    const allPokemones = useSelector((state) => state.pokemones)
    const [currentPage, setCurrentPage] = useState(1)//aca declaramos un estado local y donde arranca la pagina actual, en este caso 1

    const [orden, setOrden] = useState('')
    const [pokemonesPerPage, setPokemonesPerPage] = useState(12)// seteamos 12 pokemones por pagina

    const indexOfLastPokemon = currentPage * pokemonesPerPage  //pagina actual por la cantidad de pokemones por pagina(en este caso 12), entonces el indice del ultimo pokemon es 12, en la pagina 2 es 24 y en la 3 --> 36
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonesPerPage //(total = a 0) el indice de mi primer pokemon es la pagina 1 es = 0 y en la 2 es = 
    const currentPokemons = allPokemones.slice(indexOfFirstPokemon, indexOfLastPokemon)// me trae del estado pokemones TODOS los pokemons, y solo le pido que me traiga del indice 0 al 11, y tenemos 12 pokemones por pagina. la pagina 2 me trae del 12 al 23.

const paginado = (pageNumber) =>{
    setCurrentPage(pageNumber)
}
    
useEffect(() =>{        
        dispatch(getApiInfo())
    },[dispatch])

function handleClick(e){
        e.preventDefault();
        dispatch(getApiInfo())
    }  
function handleFilteredTypes(e){
    e.preventDefault();
    dispatch(filterPokemonesByType(e.target.value))
} 

function handleFilterByCreated(e){
    e.preventDefault();
    dispatch(filterCreated(e.target.value))
    setCurrentPage(1);
    setOrden(`Ordenando ${e.target.value}`)
}

function handleFilterAzZa(e){
    e.preventDefault();
    dispatch(filterAzZa(e.target.value))
    setCurrentPage(1); // seteamos en la 1er pagina
    setOrden(`Ordenando ${e.target.value}`)// lo usamos para setear el estado local y que me lo renderice, sino no me carga el filtro hasta que apreto el paginado
}
function handleAtack(e){
    e.preventDefault();
    dispatch(filterAttack(e.target.value))
    setCurrentPage(1);
    setOrden(`Ordenando ${e.target.value}`)
}


    
    return (    
                          
        <div id='inicio'>
            <SearchBar/>  
            <Link to = '/poke'>Crear Pokemon</Link>
            <h1>Pokemons</h1>
            
            <button onClick = {(e) => {handleClick(e)}}>
                Volver a cargar los Pokemones
            </button>
            
        <div>
            <select onChange={(e) =>{ handleFilterAzZa(e)}} >
                <option value='asc'> Ascendente</option>
                <option value='desc'> Descendente</option>
            </select>  
            <select onChange={(e) =>{ handleAtack(e)}} >
                 <option value='mayor'>Mayor Ataque</option>  
                 <option value='menor'>Menor Ataque</option>
            </select> 

            <select onChange={(e) =>{ handleFilterByCreated(e)}}>
                <option value = 'api'>Existentes</option>
                <option value= 'created'>Creados</option>
                <option value= 'all'>Todos</option>
            </select>

            <select            
            className="tipefilter"            
            onChange={(e) =>{ handleFilteredTypes(e)}}>
               
                    <option key='type' value ="type">
                    Tipos
                    </option>
                    <option value="rock">Rock</option>
                    <option value="bug">Bug</option>
                    <option value="ghost">Ghost</option>
                    <option value="steel">Steel</option>
                    <option value="normal">Normal</option>
                    <option value="fighting">Fighting</option>
                    <option value="fire">Fire</option>
                    <option value="flying">Flying</option>
                    <option value="poison">Poison</option>
                    <option value="ground">Ground</option>
                    <option value="water">Water</option>
                    <option value="grass">Grass</option>
                    <option value="electric">Electric</option>
                    <option value="shadow">Shadow</option>
                    <option value="dragon">Dragon</option>
                    <option value="dark">Dark</option>
                    <option value="fairy">Fairy</option>
                    <option value="unknown">Unknown</option>
                    <option value="physic">Psychic</option>
                    <option value="ice">Ice</option>
            </select>
            <Paginado
            pokemonesPerPage={pokemonesPerPage}
            allPokemones={allPokemones.length}
            paginado={paginado}//agregamos las props del componmemte paginado para que funcione.
            />
        {
            currentPokemons?.map( (el) =>{           
              return(
                    <div>                       
                        <Card className='card'                     
                        id={el.id}
                        name={el.name} 
                        img={el.img} 
                        type={el.types} 
                        />
                     
                    </div>             
               );
            })
        }     
                                  
            </div>
        </div>           
    )           
}
//export default Home;