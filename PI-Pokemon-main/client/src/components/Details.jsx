import React from 'react';
import{Link} from 'react-router-dom';
import{useDispatch, useSelector} from 'react-redux';
import {getDetail, Reset} from '../actions/index';
import { useEffect} from 'react';
import imagenPoke from '../components/pokebola.png'
import Loading from './loader/loader';
import './Detail.css'



export default function Detail(props){
  console.log(props)
    const dispatch = useDispatch()
    
    
    
    
useEffect(() =>{
      dispatch(getDetail(props.match.params.id));  
      return () =>{dispatch(Reset())};  
    }, [dispatch])
    
    const detalle = useSelector((state) => state.detail)

return(

  <div>
    
      {
        detalle.length>0 ?
        
        <div className='detallecard'>
            
              <h1 className='nombredetalle'>{detalle[0].name.charAt(0).toUpperCase() + detalle[0].name.slice(1)}</h1>
              <img src ={detalle[0].img|| imagenPoke}
              className='imagendetalle'
              alt=''
              width='250px'
              height='250px'
              />
              <h2>TYPES: {detalle[0].type? detalle[0].type : detalle[0].types}</h2>             
          
           <div className="skill">
              <h2>Life: {detalle[0].hp}</h2>
           </div>
           <div className="skill">
              <h2>Speed: {detalle[0].speed}</h2>
           </div>
          <div className="skill">
              <h2>Height: {detalle[0].height}</h2>
          </div>
           <div className="skill">
             <h2>Weight: {detalle[0].weight} </h2>
          </div>
          <div className="skill">
             <h2>Defense: {detalle[0].defense}</h2>
          </div>
          <Link to="/home">
            <button className="botonDetails" onClick={Reset}>Home
            </button>
          </Link>
        </div>

      :   <div>
            <Loading/>
          </div>

       }
       
  </div>


)
   
}
   
