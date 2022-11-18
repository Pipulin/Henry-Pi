import React, {useEffect} from 'react';
import {useDispatch, useSelector} from'react-redux';
import {Link} from 'react-router-dom';
import { getDetail } from '../../actions';
import { useParams } from 'react-router-dom';
import './detalles.css'





export default function Details(){
    const dispatch = useDispatch()
    const {id} = useParams()
    useEffect(() =>{
     dispatch(getDetail(id))
    }, [dispatch, id])
    
    const detalle = useSelector((state) => state.details)

    
    return (
      <div className="detalles">
        <div>
          <Link to="/home">
            <button className='volver'>Volver</button>
          </Link>
        </div>

        {detalle.length > 0 ? (
          <div>
            <h1 className='titulo'>Name: {detalle[0].name}</h1>
            <h4 className='resumen'> Summary:</h4>
            <p
             className="detail-text"
             dangerouslySetInnerHTML={{
               __html: detalle[0].summary
             }} >
            </p>
            
            <img src={detalle[0].image} 
            alt="" 
            width="500px" 
            height="400px"
            className='imagenDetails' />
            
            <div className="steps">
              <h2>Steps: {detalle[0].instructions}</h2>
             
            </div>
            <div className="detallesInf">
              <h3>
                Health Score:
                {detalle[0].healthScore}
              </h3>
              <h3>Dish Types:
                {detalle[0].dishTypes}
              </h3>
              <h3>               
                Diet Type:
                <ul className='dietsList'>
                  {detalle[0]?.diets?.map((d, i) => (
                    <span key={i}>- {d} <br/></span>
                  ))}
                </ul>
              </h3>
            </div>
          </div>
        ) : (
          <p className='loadingg'>Loading...</p>
        )}
      </div>
    );

}