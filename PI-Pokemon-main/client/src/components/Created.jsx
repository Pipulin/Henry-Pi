import React, { useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {postPokemones, getTypes} from '../actions/index';
import {useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';


function validate(input){
    let errors={};
    let regexSkill = /^[0-9_-]{1,2}$/;
    if(!input.name){
        errors.name = 'El nombre es requerido'
    }
    if(!regexSkill.test(input.life)){        
        errors.life = 'Elije un numero valido entre 1-100'
    }
    if(!regexSkill.test(input.strength)){        
        errors.strength = 'Elije un numero valido entre 1-100'
    }
    if(!regexSkill.test(input.defense)){        
        errors.defense = 'Elije un numero valido entre 1-100'

    }  
    
    if(!regexSkill.test(input.speed)){        
        errors.speed = 'Elije un numero valido entre 1-100'
    }

    if(!regexSkill.test(input.height)){        
        errors.height = 'Elije un numero valido entre 1-100'
    }

    if(!regexSkill.test(input.weight)){        
        errors.weight = 'Elije un numero valido entre 1-100'
    }
    return errors;
   
}


export function PokeCreated(){
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch()
    const history = useHistory()
    const types = useSelector((state) => state.types)

    const [input, setInput] = useState({
        name: "",
        img: "",
        life: "",
        strength: "",
        defense: "",
        speed: "",
        height: "",
        weight:"", 
        types: []
        

    })
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        console.log(input)
    }



    function handleTypes(e){
        setInput({
            ...input,
            types:[...input.types, e.target.value]//me trae el estado anterior y ademas concatena lo que elijo yo.
        })
        console.log(input)
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log(input)
        dispatch(postPokemones(input))
        alert('Personaje Creado con Exito!!!')
        setInput({
            name: "",
            img: "",
            life: "",
            strength: "",
            defense: "",
            speed: "",
            height: "",
            weight:"", 
            types: [],
            
        })
        history.push('/home')
    }

    function handleDelete(e){
        setInput({
            ...input,
            types: input.types.filter(t => t !==e )
        })
    }

    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch]);
    return(
        <div>
            <Link to='/home'><button>Home</button></Link>   
            <h1>Crea tu Personaje</h1>
            <form id='form' onSubmit={(e) => handleSubmit(e)}>
                <div >
                    <label>Nombre:</label>
                    <input
                    type='text'
                    value={input.name}
                    name='name'
                    id='nombre'
                    onChange={(e)=>handleChange(e)}
                    />
                  
                    <strong className='err'>{errors.name}</strong>

                </div>
                <div>
                    <label>Life:</label>
                    <input
                    type='number'
                    value={input.life}
                    name='life'
                    id='vida'
                    onChange={(e)=>handleChange(e)}
                    />
                     <strong className='err'>{errors.life}</strong>
                </div>
                <div>
                    <label>strength:</label>
                    <input
                    type='number'
                    value={input.strength}
                    name='strength'
                    id='fuerza'
                    onChange={(e)=>handleChange(e)}
                    />
                     <strong className='err'>{errors.strength}</strong>
                </div>
                <div>
                    <label>defense:</label>
                    <input
                    type='number'
                    value={input.defense}
                    name='defense'
                    id='defenza'
                    onChange={(e)=>handleChange(e)}
                    />
                    <strong className='err'>{errors.defense}</strong>
                </div>
                <div>
                    <label>speed:</label>
                    <input
                    type='number'
                    value={input.speed}
                    name='speed'
                    id='velocidad'
                    onChange={(e)=>handleChange(e)}
                    />
                    <strong className='err'>{errors.speed}</strong>
                </div>
                <div>
                    <label>height:</label>
                    <input
                    type='number'
                    value={input.height}
                    name='height'
                    id='altura'
                    onChange={(e)=>handleChange(e)}
                    />
                    <strong className='err'>{errors.height}</strong>
                </div>
                <div>
                    <label>weight:</label>
                    <input
                    type={'number'}
                    value={input.weight}
                    name='weight'
                    id='peso'
                    onChange={(e)=>handleChange(e)}
                    />
                    <strong className='err'>{errors.weight}</strong>
                </div>
                <div>
                    <label>Imagen:</label>
                    <input
                    type='img'
                    value={input.img}
                    name='img'
                    onChange={(e)=>handleChange(e)}
                    />
                </div>
                <select onChange={(e) => handleTypes(e)}>
                    {types.map((t) => (
                        <option value={t.name}>{t.name}</option>
                    ))}
                </select>                            
                     
                <button type='submit'>Crear</button>                                 
                
            </form> 
            {input.types.map(el =>
                <div className='tiposForm'>
                <strong>{el}</strong>
                <button className='botonX' onClick={()=> handleDelete(el)}>X</button>
                </div>
                )}        
        </div> 
    )

}

export default PokeCreated;