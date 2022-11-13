import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getRecipes,
          filterAzZa,
          filterHealth,
          filterDietsTypes, 
          filterByCreated
                            } from '../../actions';
import { Link } from 'react-router-dom';
import Card from '../Cards/card';
import Paginado from '../paginado/paginado';
import './home.css'
import apihome from '../home/apihome.png'


export default function Home (){
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);
  const [orden, setOrden] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(9)
  const indexOfLastRecipes = currentPage * recipesPerPage
  const indexOfFirstRecipes = indexOfLastRecipes - recipesPerPage
  const currentRecipes = allRecipes.slice(indexOfFirstRecipes, indexOfLastRecipes)

  const paginado = (pageNumber) =>{
    setCurrentPage(pageNumber)
}


  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);


  function handleClick(e) {
    e.preventDefault();
    dispatch(getRecipes());
  }

  
  function handleFilterAzZa(e){
    e.preventDefault();
    dispatch(filterAzZa(e.target.value))
    setCurrentPage(1);
    setOrden(e.target.value)
    
}


  function handleHealth(e){
    e.preventDefault();
    dispatch(filterHealth(e.target.value))
    setCurrentPage(1);
    setOrden(e.target.value)
}


function handleDietsTypes(e){   
  dispatch(filterDietsTypes(e.target.value))
  
  
}

function handleCreated(e){
  dispatch(filterByCreated(e.target.value))
  setCurrentPage(1);
}

  
  return (
 
    <div id="inicio">
      <div>
        <img src={apihome} className='imgHome'></img>
      </div>

      <Link to="/recipe" className='crear'>Crear un Receta</Link>
      <br />
      <button
        className="btnReload"
        onClick={(e) => {
          handleClick(e)
        }} 
      >
        Recargar todas las recetas
      </button>


      <div className="allfilter">
        
        <select  
          className="azza"
          onChange={(e) => {
              handleFilterAzZa(e)
            }} >
            <option value="none">Order</option>
            <option value="asc">AZ</option>
            <option value="desc">ZA</option>
        </select>
        
        
        <select
          className="filterbyDiets"
          onChange={e => {handleDietsTypes(e)}}
          >
            <option value="none">All Diets</option>
            <option value="dairy free">Dairy Free</option>
            <option value="gluten free">Gluten Free</option>
            <option value="ketogenic">Ketogenic</option>
            <option value="lacto ovo vegetarian">Lacto Ovo Vegetarian</option>
            <option value="foodmap friendly">Foodmap Friendly</option>
            <option value="paleolithic">Paleolithic</option>
            <option value="vegan">Vegan</option>
            <option value="pescatarian">Pescatarian</option>
            <option value="primal">Primal</option>
            <option value="whole 30">Whole 30</option>
            
        </select>
        
        
        <select
          className="created"
          onChange={(e) => {
            handleCreated(e)
          }} 
          >
          <option value="all">All Recipes</option>
          <option value="created">Created</option>
          <option value="api">Existing</option>
        </select>
        
        
        <select 
          className="health"
          onChange={e =>{
            handleHealth(e)
          }}
          > 
            <option value="none">Order Health</option>           
            <option value="high">High Health</option>
            <option value="low">Low Health</option>
        </select>
        

      </div>
          <div className='paginadoHome'>
           <Paginado
        recipesPerPage = {recipesPerPage}
        allRecipes = {allRecipes.length}
        paginado = {paginado}
        />
        </div>

        <div className='cardRecipe'>
        {
           //!currentRecipes.length ? <Loading/> :
           currentRecipes?.map((el) =>{
              return(             

              <Card 
              name={el.name} 
              image={el.image} 
              diets={el.diets}
              healthScore={el.healthScore} 
              id= {el.id}           
              
              />
              
              )
            })

        }
        </div>

      
    </div> 
        
  )
}



