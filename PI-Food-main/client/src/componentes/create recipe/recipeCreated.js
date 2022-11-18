import React, { useEffect} from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDiets, postRecipes } from "../../actions";

import './recipeCreated.css'



function validate(input){
    let errors={};
   
    if(!input.name){
        errors.name = 'El nombre es requerido'
    }
    if(!input.summary){        
        errors.summary = 'Resumen de tu receta requerido'
    }
    if(input.healthScore > 100 ||input.healthScore < 0){        
       errors.healthScore = 'Elije un numero valido entre 1-100'
    }
    if(!input.dishTypes){        
        errors.dishTypes = 'Que tipo de plato es?'

    }      
    if(!input.steps){        
        errors.steps = 'Describe los pasos de tu receta'
    }

    if(!input.diets){        
        errors.diets = 'Elije uno o mas tipos de dieta '
    }    
    return errors;   
}





export function RecipeCreate(){
    const history = useHistory()
    const dispatch = useDispatch()
    const diets = useSelector((state)=> state.diets)
    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        name: "", 
        image:"",      
        summary:"",
        healthScore: "",
        dishTypes:"",
        steps:"",         
        diets: [],
    })

function handleSubmit(e){
    e.preventDefault()
    dispatch(postRecipes(input))
    alert("Receta creada con Exito🚀🙌")
    setInput({
        name: "",
        image: "",
        summary:"",
        healthScore: "",
        dishTypes:"",
        steps:"",        
        diets: [],
    })
    history.push('/home')
}


function handleChange(e){
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
    setErrors(validate({
        ...input,
        [e.target.name]: e.target.value
    }))

}


function handleSelect(e){
    setInput({
        ...input,
        diets:[...input.diets, e.target.value]
    })

}
function handleDelete(e){
    setInput({
        ...input,
        diets: input.diets.filter(el => el !==e )
    })
}


    useEffect(() => {
        dispatch(getDiets())
    }, [dispatch]);
    return (
      <div className="allForm">
        <div>
          <Link to="/home">
            <button className="home">Home</button>
          </Link>
        </div>
        <h1 className="title">Crea tu Receta Favorita</h1>
        <form onSubmit={(e) => handleSubmit(e)} className="formulario">
          <div>
            <label className="titleform">Nombre:</label>
            <input
              type="text"
              value={input.name}
              name="name"
              onChange={handleChange}
              required
            />
            <strong className="err">{errors.name}</strong>
          </div>
          <div>
            <label className="titleform">Imagen:</label>
            <input
              type="url"
              value={input.image}
              name="image"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="titleform">Summary:</label>
            <input
              type="text"
              value={input.summary}
              name="summary"
              onChange={handleChange}
              required
            />
            <strong className="err">{errors.summary}</strong>
          </div>
          <div>
            <label className="titleform">HealthScore:</label>
            <input
              type="number"
              value={input.healthScore}
              name="healthScore"
              onChange={handleChange}
              required
            />
            <strong className="err">{errors.healthScore}</strong>
          </div>
          <div>
            <label className="titleform">DishTypes:</label>
            <input
              type="text"
              value={input.dishTypes}
              name="dishTypes"
              onChange={handleChange}
              required
            />
            <strong className="err">{errors.dishTypes}</strong>
          </div>
          <div>
            <label className="titleform">Steps:</label>
            <textarea
              type="text"
              value={input.steps}
              name="steps"
              onChange={handleChange}
              required
            />
            <strong className="err">{errors.steps}</strong>
          </div>

          <div className="selectDiets">
            <select onChange={(e) => handleSelect(e)}>
              {diets.map((d) => (
                <option required value={d.name}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>

          <button
            disabled={
              errors.name ||
              errors.summary ||
              errors.healthScore ||
              errors.dishTypes ||
              errors.steps
            }
            className="boton"
            type="submit"
          >
            Crear
          </button>
        </form>

        {input.diets.map((el) => (
          <div>
            <strong className="mapDiet">{el}</strong>
            <button onClick={() => handleDelete(el)} className="delete">
              X
            </button>
          </div>
        ))}
      </div>
    );
}

export default RecipeCreate;


