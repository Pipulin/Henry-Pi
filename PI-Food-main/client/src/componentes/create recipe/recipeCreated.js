import React, { useEffect} from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDiets, postRecipes } from "../../actions";



function validate(input){
    let errors={};
    let regexSkill = /^[0-9_-]{1,2}$/;
    if(!input.name){
        errors.name = 'El nombre es requerido'
    }
    if(!regexSkill.test(input.summary)){        
        errors.summary = 'Resumen de tu receta'
    }
    if(!regexSkill.test(input.healthyScore)){        
        errors.healthyScore = 'Elije un numero valido entre 1-100'
    }
    if(!regexSkill.test(input.dishTypes)){        
        errors.dishTypes = 'Que tipo de plato es?'

    }  
    
    if(!regexSkill.test(input.steps)){        
        errors.steps = 'Describe los pasos de tu receta'
    }

    if(!regexSkill.test(input.diets)){        
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
        healthyScore: 0,
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
        healthyScore: "",
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
        diets: input.diets.filter(t => t !==e )
    })
}


    useEffect(() => {
        dispatch(getDiets())
    }, [dispatch]);
    return(
        <div className="allForm">
            <div className="home">
                <Link to='/home'>
                    <button className="home">Home</button>
                </Link>
            </div>
              <h1 
                className="title">Crea tu Receta Favorita
              </h1>
            <form 
            onSubmit={(e) => handleSubmit(e)}
            className="formulario">
              <div>
                <label className='titulo'>Nombre:</label>
                <input
                    type='text'
                    value={input.name}
                    name='name'                   
                    onChange={handleChange}
                    />
                <strong className='err'>{errors.name}</strong>
              </div>
              <div>
                <label className='image'>Imagen:</label>
                <input
                    type='url'
                    value={input.image}
                    name='image'                    
                    onChange={handleChange}
                    />
                    
              </div>
              <div>
                <label className='summary'>Summary:</label>
                <input
                    type='text'
                    value={input.summary}
                    name='summary'                    
                    onChange={handleChange}
                    />
                <strong className='err'>{errors.summary}</strong>
              </div>
              <div>
                <label className='healthyScore'>HealthyScore:</label>
                <input
                    type='number'
                    value={input.healthyScore}
                    name='healthyScore'                   
                    onChange={handleChange}
                    />
                <strong className='err'>{errors.healthyScore}</strong>
              </div>
              <div>
                <label className='dishTypes'>DishTypes:</label>
                <input
                    type='text'
                    value={input.dishTypes}
                    name='dishTypes'                    
                    onChange={handleChange}
                    />
                <strong className='err'>{errors.dishTypes}</strong>
              </div>
              <div>
                <label className='steps'>Steps:</label>
                <textarea
                    type='text'
                    value={input.steps}
                    name='steps'                    
                    onChange={handleChange}
                    />
                <strong className='err'>{errors.steps}</strong>
              </div>

              <div className="selectDiets">
              <select onChange={(e)=>handleSelect(e)}>
                    {diets.map((d) =>(
                        <option required value={d.name}>{d.name}</option>
                    ))}
              </select>
              </div> 
                
                 


              <button
              className="boton" 
              type='submit'>Crear</button>


            </form>
            
            {input.diets.map(el => 
                    <div>
                        <strong 
                        className="mapDiet">{el}</strong> 
                        <button 
                        onClick={()=> handleDelete(el)}
                        className="delete">X</button>
                    </div>
               )}




        </div>
    )
}

export default RecipeCreate;


